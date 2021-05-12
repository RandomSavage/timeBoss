const express = require('express')
const path = require('path')
const app = express()

//middleware (alias, middleware function)
app.use('/public', express.static(path.join(__dirname, 'static')))

app.use(express.urlencoded({extended: true}));

app.use(express.json()) // To parse the incoming requests with JSON payloads

//routes
app.get('/', (req, res) => {
  // res.send('Hello World')
  console.log('Hit Home page')
  res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.get('/example', (req, res) => {
  console.log('Hit Example page')
  res.send('Hitting example route')
})

app.get('/example/:name/:age', (req, res) => {
  console.log('Params and Queries Page')
  console.log(req.params)
  console.log(req.query) //this is an object of req
  res.send(`${req.params.name} : ${req.params.age}`)
})

app.post('/', (req, res) => {
  console.log('Hit Submission Validation page')
  console.log(req.body)
  //databse work here
  res.send('successfully posted data')
})

app.listen(3000)

  //example of output of 
  // console.log(req.query)

//   localhost:3000/example/name/age?group=
// furries&style=wild