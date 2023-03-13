const prompt = require('prompt-sync')();
const events = require("events");
const { eventEmitter }= require("./eventsemitter.js")

const a = +prompt("Enter First Number ")
const b = +prompt("Enter Second Number ")
const c = prompt("Enter the method (addition, subtraction, multiplication, division) ");

eventEmitter.emit(c, a, b)