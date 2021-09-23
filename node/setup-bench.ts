import { Suite } from "benchmark";
import { findTestCaseFiles } from "./find-testcases";

export function* getSuites(): Iterable<
  Suite & { name: String; warmUp: () => any[] }
> {
  for (const testFile of findTestCaseFiles()) {
    require(testFile);
  }

  for (const suiteName of Object.keys(testCases)) {
    const cases = testCases[suiteName];
    const isAsync = cases.some((i) => i.isAsync);
    var suite = new Suite(suiteName, { async: isAsync });
    Object.assign(suite, {
      name: suiteName,
      warmUp: () => suite.map((c) => c.fn()),
    });

    for (const c of cases) {
      suite.add(c.target, c.testFunction);
    }

    yield suite as any;
  }
}
