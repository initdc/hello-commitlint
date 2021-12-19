const { hello, sum, minus, times, devide } = require("./index");
const helloMsg = "Hello commitlint!";

test("hello", () => {
  expect(hello(helloMsg)).toEqual("Hello commitlint!");
});

test("sum: 1 + 2 = 3", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(1, 2)).not.toEqual(4);
});

test("minus: 1 - 2 = -1", () => {
  expect(minus(1, 2)).toEqual(-1);
  expect(minus(1, 2)).not.toEqual(0);
});

test("times: 1 * 2 = 2", () => {
  expect(times(1, 2)).toEqual(2);
  expect(times(2, 2)).toEqual(4);
});

test("devide: 1 / 2 = 0.5", () => {
  expect(devide(1, 2)).toEqual(0.5);
  expect(devide(2, 2)).toEqual(1);
});
