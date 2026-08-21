// Aula 05 - Condições
let prompt = require('prompt-sync')();

console.log("Bem vindo(a) ao DETRAN!")
let idade = prompt("    Digite a sua idade: ")
console.log("")

// Comparadores
    // > maior
    // < menor
    // == (estritamente) igual
    // >= maior OU igual
    // <= menor OU igual
    // != diferente

if(idade >= 18){
    console.log("Você está apto para tirar sua carteira!")
 } else{
    console.log("Você não pode tirar sua carteira! Volte quando fizer 18 anos.")}
