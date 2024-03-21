import * as fs from 'fs';

// fs.writeFile('arquivo.txt', 'TreinaWeb', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Arquivo criado com sucesso')
// });

// fs.appendFile('arquivo.txt', ' TreinaWeb 2', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Arquivo atualziado com sucesso')
// });

// fs.readFile('arquivo.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString())
// });


let data = fs.readFileSync('arquivo.txt');
console.log(data.toString());

//Portanto, (err) => { ... } função de flecha
// é uma maneira concisa e comum em JavaScript de definir uma função de callback que lida com possíveis erros em operações assíncronas.