(() => {
  async function promise() {
    return await Promise.resolve(1);
  }

  pushTestCase(
    new TestCase("Promise", "", promise, __dirname.match(/\/(\w+)$/)[1], true)
  );
})();
