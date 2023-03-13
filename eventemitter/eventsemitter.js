const events = require("events");
const eventEmitter = new events();
const { addition, subtraction, multiplication, division } = require('./methods.js')

eventEmitter.on("addition", (a,b) => addition(a,b));
eventEmitter.on("subtraction", (a,b) => subtraction(a,b));
eventEmitter.on("multiplication", (a,b) => multiplication(a,b));
eventEmitter.on("division", (a,b) => division(a,b));

module.exports = {
  eventEmitter
};
