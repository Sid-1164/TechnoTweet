st fs = require("fs")

const first = fs.readFileSync("./content/first.txt" , "utf8")
const second = fs.readFileSync("./content/second.txt" , "utf8")

console.log('start');

console.log(first);
console.log(second);

fs.writeFileSync("./content/res.txt" , 
    `res = ${first} and ${second}`
)


const res = fs.readFileSync('./content/res.txt' , 'ascii')
console.log(res)
console.log('task done');
console.log('new started');