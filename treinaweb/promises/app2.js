import { appendFile } from "fs/promises";

appendFile('meu_arquivo2.txt', 'TreinaWeb 2').then(
    (a) => {
        console.log('Arquivo criado ou atualziado com sucesso !')
    }
).catch(
    (e) => {
        console.log('erro de leitura ', e)
    }
);