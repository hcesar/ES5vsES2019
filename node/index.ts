import { getSuites } from "./setup-bench";
import "./init";

(async () => {
  for (const suite of getSuites()) {
    console.log("Testing", suite.name);
    console.log("WarmUp", await Promise.all(suite.warmUp()));
    suite
      .on("cycle", function (event) {
        console.log(String(event.target));
      })
      .on("complete", function () {
        console.log("Fastest is " + this.filter("fastest").map("name"));
        console.log();
      })
      .run();
  }
})();
