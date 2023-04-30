// const fs = require('fs').promises;

// // Write data to a file
// fs.writeFile('tweet.txt', 'Hi there, writing some data')
//     .then(() => console.log('Data written to file'))
//     .catch((err) => console.error(err));

// // Read data from a file
// fs.readFile('tweet.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// -------------------------------------------------------------------------------

// const ProgressBar = require('progress');

// const bar = new ProgressBar(':bar', { total: 10 });
// const timer = setInterval(() => {
//     bar.tick();
//     if (bar.complete) {
//         clearInterval(timer);
//     }
// }, 1000);

// -------------------------------------------------------------------------------
// fs sync

const fs = require('fs')

// Reading
const first = fs.readFileSync('./content/one.txt', 'utf8')
const second = fs.readFileSync('./content/two.txt', 'utf8')

// Writing
fs.writeFileSync(
    './content/res.txt', `Res = ${first} ${second}`
)

const res = fs.readFileSync('./content/res.txt', 'utf8')
// Printing
console.log(res)

// -------------------------------------------------------------------------------

// fs async 

// const fs = require('fs')

// // reading
// fs.readFile('./content/res.txt', 'utf8', (err, result) => {
//     if (err) {
//         return
//     }
//     console.log(result)
// })

// // writing
// fs.writeFile('./content/res.txt', ' appending', { flag: 'a' }, (err, result) => {
//     if (err) {
//         return
//     }
//     console.log(result)
// })