const http = require('http')
// const readMe = require('./readMe.js')
const hostname = '127.0.0.1'
const port = '5500'

// const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(endGame())
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})


function endGame() {
  
  console.log(`helloworld`)
  
}


