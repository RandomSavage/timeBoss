const express = require('express')
const path = require('path')
const app = express()

//middleware (alias, middleware function)
app.use('/public', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
  // res.send('Hello World')
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.get('/example', (req, res) => {
  res.send('Hitting example route')
})

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params)
  console.log(req.query) //this is an object of req
  res.send(`${req.params.name} : ${req.params.age}`)
})

app.listen(3000)

  //example of output of 
  // console.log(req.query)

//   localhost:3000/example/name/age?group=
// furries&style=wild