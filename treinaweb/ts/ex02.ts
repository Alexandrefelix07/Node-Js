import * as fs from "fs";

export function exemploEx02(texto: string): void {
  fs.writeFile("arquivo.txt", texto, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Arquivo criado com sucesso");
  });
}
