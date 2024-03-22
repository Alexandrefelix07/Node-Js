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
            try {
                resolve(data.toString());//sempre retorna isso com tratamento
            } catch {
                reject('Erro de Leitura de arquivo ');//sempre retorna isso com tratamento   
            }
        });
    });
}

read('meu_arquivo.txt').then(
    (data) => console.log(data)
).catch(
    (erro) => console.log('error tratado ', erro)
);
