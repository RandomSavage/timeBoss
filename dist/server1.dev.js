"use strict";

var http = require('http'); // const readMe = require('./readMe.js')


var hostname = '127.0.0.1';
var port = '5500'; // const port = process.env.PORT

var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(endGame(), " hello world");
});
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});

function endGame() {
  console.log("helloworld");
}