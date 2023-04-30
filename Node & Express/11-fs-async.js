// Async

const { readFile, writeFile } = require('fs')
console.log('start');
// UTF-8 is a character encoding system. It lets you represent characters as ASCII text, while still allowing for international characters, such as Chinese characters.

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err + "1");
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err + "2");
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result for async : ${first} , ${second}`
            , (err, result) => {
                if (err) {
                    console.log(err + "3");
                    return;
                }
                console.log(result);
                console.log('done with this task');
            })
    })
})

console.log('starting with next one');