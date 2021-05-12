"use strict";

var readline = require('readline'); // const AbortController = require('abort-controller')
// const AbortController = require("abort-controller")


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var ac = new AbortController();
var signal = ac.signal;
var randomNum = Math.floor(Math.random() * 10 + 1);
var num1 = randomNum;
var num2 = randomNum;
rl.question("What is ".concat(num1, " + ").concat(num2, " \n"), {
  signal: signal
}, function (answer) {
  if (answer.trim() == num1 + num2) {
    console.log("true that");
    rl.close();
  } else {
    console.log('Do it again');
    answer = "";
  }
});
signal.addEventListener('abort', function () {
  console.log("You too slow, man \n");
  rl.question("You there? \n ", function (answer) {
    if (answer.trim() === "") {
      console.log('!Bizzz');
      setTimeout(function () {
        return rl.close();
      }, 2000);
    } else {
      console.log("Fuzzzz ".concat(answer));
      setTimeout(function () {
        return rl.close();
      }, 2000);
    }
  });
}, {
  once: true
});
setTimeout(function () {
  return ac.abort();
}, 10000);
console.log(num1 + num2);