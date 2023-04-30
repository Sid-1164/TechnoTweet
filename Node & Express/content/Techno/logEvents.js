const EventEmitter = require('events');
const event = new EventEmitter();
const fs=require('fs');
const fsPromises=require('fs').promises;
const path= require('path');

const logEvent= (message)=>{
    event.on('log',async (message)=>{
        await fsPromises.appendFile(
            path.join(__dirname,"logs","logs.txt"),
            message
        );
    })
}

module.exports= logEvent;