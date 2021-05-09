const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})
let ac = new AbortController()
const signal = ac.signal
let randomNum = Math.floor(Math.random() * 10 + 1)
let num1 = randomNum
let num2 = randomNum

rl.question(`What is ${num1} + ${num2}`, { signal }, (answer) => {
  if(answer.trim() == num1 + num2) {
    console.log("true that")
  } else {
    console.log('Do it again')
  }
  rl.close()
})

signal.addEventListener('abort', () => {
  console.log('You too slow, man')
}, {once: true})

setTimeout(() => ac.abort(), 10000)


console.log(num1 + num2)