// ATIVIDADE 2: Maior entre dois números

let prompt = require('prompt-sync')();

console.log("\n--------- MAIOR ENTRE DOIS NÚMEROS ---------\n")

let numero1 = parseInt(prompt("Digite o primeiro número: "));
let numero2 = parseInt(prompt("Digite o segundo número: "));

if(numero1 > numero2){
    console.log("\nO primeiro número é maior.");
} else if(numero2 > numero1){
    console.log("\nO segundo número é maior.");
} else {
    console.log("\nOs números são iguais.");
}

console.log("\n----------------------------------------\n")
