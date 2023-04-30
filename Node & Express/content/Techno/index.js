const logEvents=require('./logEvents');
const EventEmitter = require('events');
const event = new EventEmitter();

const dateTime = `format(new Date(), "yyyy/MM/dd\tHH:mm:ss")`;
const logMessage=`${dateTime}\tEvent Emitted!!\n`

event.emit('log',logEvents(logMessage));

