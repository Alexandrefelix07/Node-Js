import EventEmitter from 'events'
var emitter = new EventEmitter();

emitter.on('meu_evento', () => {
    console.log('meu evento foi acionado !')
});

emitter.emit('meu_evento');
