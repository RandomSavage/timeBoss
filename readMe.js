const readline = require('readline')
// const AbortController = require('abort-controller')
// const AbortController = require("abort-controller")
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
let ac = new AbortController()
const signal = ac.signal
let randomNum = Math.floor(Math.random() * 10 + 1)
let num1 = randomNum
let num2 = randomNum

rl.question(`What is ${num1} + ${num2} \n`, { signal }, (answer) => {
  if(answer.trim() == num1 + num2) {
    console.log("true that")
    rl.close()
  } else {
    console.log('Do it again')
    answer = ""
  }
})

signal.addEventListener('abort', () => {
  console.log(`You too slow, man \n`)
  rl.question(`You there? \n `, (answer)=> {
    if(answer.trim() === "") {
      console.log('!Bizzz')
      setTimeout(() => rl.close(), 2000)
    } else {
      console.log(`Fuzzzz ${answer}`)
      setTimeout(() => rl.close(), 2000)
    }
  })
}, {once: true})

setTimeout(() => ac.abort(), 10000)


console.log(num1 + num2)