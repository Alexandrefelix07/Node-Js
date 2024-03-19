import * as fs from 'fs';

fs.writeFile('arquivo.txt', 'TreinaWeb', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Arquivo criado com sucesso')
});

//Portanto, (err) => { ... } função de flecha
// é uma maneira concisa e comum em JavaScript de definir uma função de callback que lida com possíveis erros em operações assíncronas.