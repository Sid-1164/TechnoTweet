const fs = require('fs')

// console.log('start of the task')

fs.readFile('one.txt' , 'ascii' , (err , res)=>{
    if (err) {
        console.log(`Error : ${err}`)
    }
    
    console.log(res)
    
    fs.readFile('two.txt' , 'ascii' , (err, res) => {
        if (err) {
            console.log(`Error : ${err}`)
        }

        console.log(res);
    })

    // console.log('task completed')
})

// console.log('new task started')