// ATIVIDADE 5: Time Vencedor

let prompt = require('prompt-sync')();

console.log("\n--------- DESCOBRINDO O TIME VENCEDOR ---------\n")

let time1 = prompt("Digite o nome do primeiro time: ");
let gols_time1 = parseInt(prompt("Digite a quantidade de gols do time " + time1 + ": "));

console.log("")

let time2 = prompt("Digite o nome do segundo time: ");
let gols_time2 = parseInt(prompt("Digite a quantidade de gols do time " + time2 + ": "));

if(gols_time1 > gols_time2){
    console.log("\nO time " + time1 + " é o vencedor.");
} else if(gols_time2 > gols_time1){
    console.log("\nO time " + time2 + " é o vencedor.");
} else {
    console.log("\nOs times empataram.");
}

console.log("\n----------------------------------------\n")
