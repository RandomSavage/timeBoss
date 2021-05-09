// import sum from './calculation'
const calculation = require('./calculation') 


console.log(calculation)
console.log(calculation.sum(1, 1))


const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('calculation', () => {
  console.log('A calculation has been performed.')
})

eventEmitter.emit('calculation')

class Person extends EventEmitter{
  constructor(name) {
    super()
    this._name = name
  }

  get name() {
    return this._name
  }
}

let billy = new Person('billy')

billy.on('name', ()=> {
  console.log(`My name is ${billy.name}`)
})

billy.emit('name')
