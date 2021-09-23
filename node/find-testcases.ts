import { readdirSync } from "fs";
import { resolve } from "path";

const paths = ["./dist/es5", "./dist/es2019"];

export function* findTestCaseFiles() {
  for (const p of paths) {
    const fullPath = resolve(p);
    for (const file of readdirSync(fullPath)) {
      yield resolve(`${p}/${file}`);
    }
  }
}
