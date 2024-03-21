import EventEmitter from 'events'
// var emitter = new EventEmitter();

// emitter.on('meu_evento', (num) => {
//     console.log('meu evento foi acionado !' + num)
// });

// emitter.emit('meu_evento', 123456);
class Cao extends EventEmitter {
    latir() {
        console.log('Latindo....');
    }
}

var rex = new Cao();

rex.on('pessoa_na_porta', rex.latir);
//rex.once('pessoa_na_porta', rex.latir);
rex.emit('pessoa_na_porta');
rex.emit('pessoa_na_porta');
rex.removeListener('pessoa_na_porta', rex.latir);
rex.emit('pessoa_na_porta');

