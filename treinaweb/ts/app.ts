// npx tsc app.ts para gerar o arquivo
// npm i readline  extra do curso
// npm i --save-dev extra do curso
// npm init
// npm i typescript --D
// npm i @types/node
// npm i ts-node-dev -D
// npx ts-node-dev app.ts  nao gera o arquivo js
// melhor pra rodar npm run dev
import { exemploEx01 } from "./ex01";
import { exemploEx02 } from "./ex02";
import { exemploEx03 } from "./ex03";
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
  console.log("3. Atualizar Arquivo txt ");
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
      case 2:
        exemploEx02(endereco);
        break;
      case 3:
        exemploEx03(endereco);
        break;
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
