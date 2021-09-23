(() => {
  function* generator() {
    const arr = testAssets.bigArray;
    for (var i = 0; i < arr.length; i++) {
      yield arr[0];
    }
  }
  function test() {
    const gen = generator();
    let ret = 0;
    while (true) {
      const current = gen.next();
      if (current.done) {
        break;
      }
      ret += current.value as number;
    }

    return ret;
  }

  pushTestCase(
    new TestCase("Generator", "", test, __dirname.match(/\/(\w+)$/)[1])
  );
})();
