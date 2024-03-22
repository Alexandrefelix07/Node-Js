import * as fs from 'fs'
// const p = new Promise((resolve, reject) => {
//     try {
//         resolve('Ok');
//     } catch (e) {
//         reject(e)
//     }

// });
// p.then(
//     (parametros) => console.log('sucesso', parametros)
// ).catch(
//     (erro) => console.log('error ', erro)
// );

function read(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

read('meu_arquivo.txt').then(
    (data) => console.log(data)
).catch(
    (erro) => console.log('error tratado ', erro)
);
