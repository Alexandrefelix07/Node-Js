import * as fs from 'fs'

console.time('Assincrono');
var couter = 0;

for (var i = 0; i < 1000; i++) {
    fs.readFile('meu_arquivo.txt', (err, data) => {
        if (err) {
            return console.log(err);
        }
        couter++;
        console.log('Assincrono ' + data.toString());
        if (couter === 1000) {
            console.timeEnd('Assincrono');
        }
    })
}
//61.891ms  ou 59.114ms Assincrono