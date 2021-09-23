declare type TestAssets = {
  smallArray: number[];
  bigArray: number[];
  hugeArray: number[];
};

declare type TestCases = {
  [name: string]: ITestCase[];
};

declare function pushTestCase(testCase: ITestCase, ...args: ITestCase[]): void;
declare var testAssets: TestAssets;
declare var testCases: TestCases;

declare interface ITestCase {
  group: string;
  name: string;
  testFunction: () => void;
  target: string;
  isAsync?: boolean;
}
