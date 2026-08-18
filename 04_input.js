// Aula 04: INPUT
let prompt = require('prompt-sync')();

// let nome = prompt("Digite seu nome: ");
// let sobrenome = prompt("Digite seu sobrenome: ");
// let idade = prompt("Digite sua idade: ");
// let nome_completo = nome + " " + sobrenome;
// console.log("Seja bem-vindo(a), " + nome_completo + "! Você tem " + idade + " anos.");
// console.log("\n\n");

let nome1 = prompt("Digite o nome de um produto: ");
let preco = prompt("Digite o preço de " + nome1 + ": R$");
console.log("\n")

let nome2 = prompt("Digite o nome de outro produto: ");
let preco2 = prompt("Digite o preço de " + nome2 + ": R$");
console.log("\n----- RELATÓRIO -----");
console.log(nome1 + " - R$ " + preco);
console.log(nome2 + " - R$ " + preco2);