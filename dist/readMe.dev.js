"use strict";

var readline = require('readline'); // const AbortController = require('abort-controller')


var AbortController = require("abort-controller");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var ac = new AbortController();
var signal = ac.signal;
var randomNum = Math.floor(Math.random() * 10 + 1);
var num1 = randomNum;
var num2 = randomNum;
rl.question("What is ".concat(num1, " + ").concat(num2), {
  signal: signal
}, function (answer) {
  if (answer.trim() == num1 + num2) {
    console.log("true that");
  } else {
    console.log('Do it again');
  }

  rl.close();
});
signal.addEventListener('abort', function () {
  console.log('You too slow, man');
}, {
  once: true
});
setTimeout(function () {
  return ac.abort();
}, 10000);
console.log(num1 + num2);