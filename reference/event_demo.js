const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event' , () => console.log('Event Fired !!'));

//innit event

myEmitter.emit('event');