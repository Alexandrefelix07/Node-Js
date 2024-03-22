import { appendFile } from "fs/promises";

export function exemploEx03(texto: string): void {
  appendFile("arquivo.txt", texto)
    .then((a) => {
      console.log("Arquivo atualziado com sucesso !");
    })
    .catch((e) => {
      console.log("erro ", e);
    });
}
