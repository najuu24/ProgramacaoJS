// ATIVIDADE 3: Calculando IMC

let prompt = require('prompt-sync')();

console.log("\n--------- CALCULANDO IMC ---------\n")

let peso = parseFloat(prompt("Digite o peso (em kg): "));
let altura = parseFloat(prompt("Digite a altura (em metros): "));

let imc = peso / (altura * altura);

console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);

if(imc < 18.5){
    console.log("Você está abaixo do peso.");
} else if(imc < 25){
    console.log("Você está com o peso ideal.");
} else {
    console.log("Você está acima do peso.");
}

console.log("\n----------------------------------------\n")
