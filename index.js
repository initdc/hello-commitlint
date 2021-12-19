function hello(msg) {
  console.log(msg);
  return msg;
}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

hello("Hello commitlint!");

module.exports = {
  hello,
  sum,
  minus,
  times,
  devide
};
