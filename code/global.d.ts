declare type TestAssets = {
  smallArray: number[];
  bigArray: number[];
  hugeArray: number[];
};

declare class TestCase {
  public group: string;
  public name: string;
  public testFunction: () => void;
  public isAsync?: boolean;
  public target: string;
  constructor(
    group: string,
    name: string,
    testFunction: () => void,
    target: string,
    isAsync?: boolean
  );
}

declare const testAssets: TestAssets;
declare function pushTestCase(testCase: TestCase, ...args: TestCase[]): void;
