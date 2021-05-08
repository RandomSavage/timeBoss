"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sum = function sum(num1, num2) {
  return num1 + num2;
};

var PI = 3.14;

var SomeMathObject = function SomeMathObject() {
  _classCallCheck(this, SomeMathObject);

  console.log('object created');
}; // module.exports.sum = sum
// module.exports.PI = PI
// module.exports.SomeMathObject = SomeMathObject


module.exports = {
  sum: sum,
  PI: PI,
  SomeMathObject: SomeMathObject
}; // event driven programming