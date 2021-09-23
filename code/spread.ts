(() => {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  function spreadArr() {
    return [...testAssets.smallArray];
  }
  function spreadObj() {
    return { ...obj };
  }

  pushTestCase(
    new TestCase("Spread", "Array", spreadArr, __dirname.match(/\/(\w+)$/)[1]),
    new TestCase("Spread", "Object", spreadObj, __dirname.match(/\/(\w+)$/)[1])
  );
})();
