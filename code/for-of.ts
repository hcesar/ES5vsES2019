function forOf() {
  let result = 0;
  for (const x of testAssets.bigArray) {
    result += x;
  }
  return result;
}

pushTestCase(
  new TestCase("For...of", "", forOf, __dirname.match(/\/(\w+)$/)[1])
);
