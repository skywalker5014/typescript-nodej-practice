/*
certain objects can emit events and we call them emitter
we can listen ot those and react in a way using callback fucntions called listeners
an instance of the eventEmitter has a method "on" that allows one or more function to be attached
to an object. the instance of the eventEmitter also has a method "emit" that emits and event and 
causes all the eventEmitter to call all the listeners
*/

// import * as eem from 'events'
const eem = require('events')

const evnt = new eem()

evnt.on('event', function(){
    console.log('one');
})

evnt.on('event', () => {
    console.log('two');
})

evnt.on('event', () => {
    console.log('three');
} )

evnt.emit('event');