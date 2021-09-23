export class TestCase implements ITestCase {
  constructor(
    public group: string,
    public name: string,
    public testFunction: () => void,
    public target: string,
    public isAsync?: boolean
  ) {}
}
