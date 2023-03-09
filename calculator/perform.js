const calculate = require("./methods");
const method = process.argv[3];
const a = +process.argv[2];
const b = +process.argv[4];

switch (method) {
  case "+":
    console.log(calculate.add(a, b));
    break;
  case "-":
    console.log(calculate.sub(a, b));
    break;
  case "*":
    console.log(calculate.multi(a, b));
    break;
  case "/":
    console.log(calculate.div(a, b));
    break;
  default:
    console.log("Invalid method");
    break;
}
