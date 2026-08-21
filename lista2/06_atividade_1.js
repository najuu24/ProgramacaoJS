// ATIVIDADE 1: Negativo ou Positivo

let prompt = require('prompt-sync')();

console.log("\n--------- NEGATIVO OU POSITIVO ---------\n")

let numero = parseInt(prompt("Digite um número: "));
if(numero > 0){
    console.log("O número é positivo.");
} else {
    console.log("O número é negativo.");
}

console.log("\n----------------------------------------\n")
