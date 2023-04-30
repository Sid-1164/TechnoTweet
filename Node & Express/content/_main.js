// const fs = require("fs")

// const first = fs.readFileSync("./content/first.txt" , "utf8")
// const second = fs.readFileSync("./content/second.txt" , "utf8")

// console.log('start');

// console.log(first);
// console.log(second);

// fs.writeFileSync("./content/res.txt" ,
//     `res = ${first} and ${second}`
// )


// const res = fs.readFileSync('./content/res.txt' , 'ascii')
// console.log(res)
// console.log('task done');
// console.log('new started');

// --------------------------------------------------------

// const fs = require('fs')

// console.log('start');

// fs.readFile('./content/res.txt', 'ascii', (err, data) => {
//     if (err === true) {
//         console.log(`there is an error => ${err}`)
//     }
//     // console.log(data);

//     fs.writeFile('./content/res.txt', ' and appending more', { flag: 'a' }, (err, data) => {
//         if (err) {
//             console.log(`there is an error => ${err}`)
//         }
//         // console.log('data appended sucessfully')

//         fs.readFile('./content/res.txt' , 'ascii' , (err , data) => {
//             if (err) {
//                 console.log(err)
//             }
//             // console.log(data)
//             console.log('task done');
//         })
//     })
// })

// console.log('next task started');

// --------------------------------------------------------

// const fs = require('fs').promises

// fs.readFile('./content/res.txt' , 'ascii')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("there is error");
//     })
    
// fs.writeFile('./content/res.txt' , ' writing more' , {flag : 'a'})
//     .then( () => {
//         console.log('doneeee');
//     } )
//     .catch( (err) => {
//         console.log('there is err');
//     })
