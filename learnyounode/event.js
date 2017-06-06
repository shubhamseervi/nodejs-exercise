// trying event listener

var EventEmitter = require('events').EventEmitter;
a = new EventEmitter;
a.on('event', function () {
console.log('called');
});

a.emit('event');
