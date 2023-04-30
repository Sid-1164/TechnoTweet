const fs = require('fs')

let first = fs.readFileSync('one.txt' , 'utf-8')
let two = fs.readFileSync('two.txt' , 'utf-8')

// console.log('start of the task')

console.log(first)
console.log(two)

// console.log('task completed')
// console.log('new task started')