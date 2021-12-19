const hello = require("./index");
const helloMsg = "Hello commitlint!";


test("hello", () => {
  expect(hello(helloMsg)).toEqual("Hello commitlint!");
});
