// ATIVIDADE 6: Investigação Criminal

let prompt = require('prompt-sync')();

console.log("")

let resposta1 = prompt("1. Telefonou para a vítima? (sim/nao): ");
let resposta2 = prompt("2. Esteve no local do crime? (sim/nao): ");
let resposta3 = prompt("3. Mora perto da vítima? (sim/nao): ");
let resposta4 = prompt("4. Devia para a vítima? (sim/nao): ");
let resposta5 = prompt("5. Já trabalhou com a vítima? (sim/nao): ");

let pontos = 0

if (resposta1 == "sim") {
    pontos = pontos + 1;
}
if (resposta2 == "sim") {
    pontos = pontos + 1;
}
if (resposta3 == "sim") {
    pontos = pontos + 1;
}
if (resposta4 == "sim") {
    pontos = pontos + 1;
}
if (resposta5 == "sim") {
    pontos = pontos + 1;
}

if(pontos == 5){
    console.log("Assassino!")
}
if(pontos == 4){
    console.log("Cúmplice!")
}
if(pontos == 3){
    console.log("Cúmplice!")
}
if(pontos == 2){
    console.log("Suspeita!")
}
if(pontos < 2){
    console.log("Inocente!")
}

console.log("")