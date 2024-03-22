const p = new Promise((resolve, reject) => {
    try {
        resolve('Ok');
    } catch (e) {
        reject(e)
    }

});
p.then(
    (parametros) => console.log('sucesso', parametros)
).catch(
    (erro) => console.log('error ', erro)
);