// npm init > npm install typescript --D
// npx tsc app.ts   para gerar o arquivo
import { exemploEx01 } from "./ex01";
import * as readline from 'readline';

var a: string = "treinaweb";
var b: number = 123;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function exibirMenu(): void {
  console.log("Menu:");
  console.log("1. Chamar função exemplos");
  console.log("0. Sair");
}

function main(): void {
  let opcao: number = -1;

  while (opcao !== 0) {
    exibirMenu();
    const input: string | null = prompt("Digite a opção desejada: ");

    if (input !== null) {
      opcao = parseInt(input);
    } else {
      console.log("Entrada inválida. Tente novamente.");
      continue;
    }

    switch (opcao) {
      case 1:
        exemploEx01(b, a);
        break;
      case 0:
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  }
}

main();
