import { TestCase } from "./test-case";

const range = (n) => [...Array(n).keys()];
global.testAssets = {
  smallArray: range(5),
  bigArray: range(1000),
  hugeArray: range(1_000_000),
};

global.TestCase = TestCase;
global.testCases = {};

function pushTestCase(testCase: TestCase, ...arg: TestCase[]): void {
  const testCaseName = `${testCase.group}#${testCase.name}`;

  testCases[testCaseName] = testCases[testCaseName] ?? [];
  testCases[testCaseName].push(testCase);

  arg.forEach((i) => pushTestCase(i));
}

global.pushTestCase = pushTestCase;
