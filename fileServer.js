const http = require('http')
const fs = require('fs')

//serve index.html
/* http.createServer((req, res) => {
  const readStream = fs.createReadStream('./static/index.html') //req
  res.writeHead(200, {'Content-type' : 'text/html'}) //building the response header
  readStream.pipe(res)
}).listen(3000) */

//serve json file
http.createServer((req, res) => {
  const readStream = fs.createReadStream('./static/example.json') //req
  res.writeHead(200, {'Content-type' : 'application/json'}) //building the response header
  readStream.pipe(res)
}).listen(3000)

//serve image file
/* http.createServer((req, res) => {
  const readStream = fs.createReadStream('./static/ringMaker.jpg') //req
  res.writeHead(200, {'Content-type' : 'image/jpg'}) //building the response header
  readStream.pipe(res)
}).listen(3000) */
