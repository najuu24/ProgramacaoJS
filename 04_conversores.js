// Aula 04: Converter variáveis
let prompt = require('prompt-sync')();

let num1 = prompt("Digite um número: "); // forma 1
num1 = parseFloat(num1);

let num2 = parseFloat(prompt("Digite outro número: ")); // forma 2 (prefiro)

let soma = num1 + num2
console.log("O resultado é: " + soma) 

// --------------------------------------