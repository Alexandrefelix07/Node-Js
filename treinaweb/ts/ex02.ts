import * as fs from "fs";

var endereco: string = "Av marechal gouveia";

export function exemploEx02(): void {
  fs.writeFile("arquivo.txt", endereco, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Arquivo criado com sucesso");
  });
}
