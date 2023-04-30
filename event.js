const EventEmitter=require('events');
const event=new EventEmitter();
event.on('myevent',()=>{
    console.log('Event emitted successfully');
})

event.on('greet',(name)=>{
    console.log(`Hello ${name}`);
});


event.emit('myevent');
event.emit('greet',"Datta");