const fs = require('fs');

console.log('start');

fs.readFile('./content/result.txt' , 'utf-8' , (err , data) => {
    if (err) {
        console.log(`Some error ${err}`);
    }
    console.log(data)

    fs.writeFile('./content/result.txt' , ' appending' , {flag : 'a'} , (err, data) => {
        if (err) {
            console.log(`Some error ${err}`);
        }
        console.log('appended successfully')
    
        fs.readFile('./content/result.txt' , 'utf-8' , (err,data)=>{
            console.log(data)
            console.log('task done');
        })
    })
})

console.log('new task started');