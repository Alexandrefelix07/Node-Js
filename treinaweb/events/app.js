import EventEmitter from 'events'
var emitter = new EventEmitter();

emitter.on('meu_evento', (num) => {
    console.log('meu evento foi acionado !' + num)
});

emitter.emit('meu_evento', 123456);
