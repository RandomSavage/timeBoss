const http = require('http')

/* const server = http.createServer((req, res) => {
  res.write('Hello World from Nodejs')
  res.end()
}) */

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('Hello world from nodejs') //req
    res.end() //res
  }else {
    res.write('using some other domain') 
    res.end()
  }
})

server.listen('3000')