// Aula 05: Porcentagem

let prompt = require('prompt-sync')(); // import de uma biblioteca ('require')

let valor = parseFloat(prompt("Digite o valor: "))
let desconto = parseFloat(prompt("Digite o valor de desconto: "))
desconto = desconto / 100
let total = valor * desconto
let valor_final = valor - total  
console.log(valor_final)