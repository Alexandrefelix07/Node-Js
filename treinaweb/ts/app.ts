// npm init > npm install typescript --D
// npx tsc app.ts --target ES6  para gerar o arquivo
// npm install readline
// npm install --save-dev
// npm install @types/node
import { exemploEx01 } from "./ex01";
//import { exemploEx02 } from "./ex02";

import * as readline from "readline";

var endereco: string = "Av marechal gouveia";
var a: string = "treinaweb";
var b: number = 123;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Chamar função exemplos");
  console.log("2. Gerar Arquivo txt ");
  console.log("0. Sair");
}

function main() {
  let opcao = -1;

  rl.on("line", (input) => {
    opcao = parseInt(input);

    switch (opcao) {
      case 1:
        exemploEx01(b, a);
        break;
    //   case 2:
    //     exemploEx02(endereco);
    //     break;
      case 0:
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }

    if (opcao !== 0) {
      exibirMenu();
    }
  });

  exibirMenu();
}

main();
