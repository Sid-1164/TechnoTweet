const EventEmitter=require('events');
const event=new EventEmitter();

event.on('myEvent',(name)=>{
    console.log(`Hello ${name}`);
});

event.emit('myEvent',("Himanshu"));