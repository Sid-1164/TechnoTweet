const { log } = require('console');
const fs = require('fs');
const first = fs.readFileSync('./content/first.txt' , 'utf-8')
const second = fs.readFileSync('./content/second.txt' , 'ascii')

console.log('start');

console.log(first);
console.log(second);

fs.writeFileSync('./content/result.txt' , `adding two files : ${first} & ${second}`)

const res = fs.readFileSync('./content/result.txt' , 'ascii')

console.log(res);

console.log('task done')
console.log('new task started')


