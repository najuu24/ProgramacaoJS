let prompt = require('prompt-sync')();

// Atividade 1

let ano_nascimento = parseInt(prompt("Digite o ano em que você nasceu: "))
let idade = 2026 - ano_nascimento 
let idade_atual = prompt("Atualmente você tem/fará: " + idade + " anos.")


// Atividade 2

let nota1 = parseFloat(prompt("Digite sua primeira nota: "))
let nota2 = parseFloat(prompt("Digite sua segunda nota: "))
let nota3 = parseFloat(prompt("Digite sua terceira nota: "))
let media = (nota1 + nota2 + nota3) / 3
let media_final = prompt("Sua média final é: " + media)


// Atividade 3

let produto = prompt("Digite o nome do produto: ")
let preco = parseFloat(prompt("Digite o preço do produto: "))
let quantidade = parseInt(prompt("Digite a quantidade do produto em estoque: "))
let faturamento = quantidade * preco


console.log("\n----- RELATÓRIO -----");
console.log("Nome do produto: " + produto)
console.log("Caso venda todos os produtos em estoque, o faturamento será de: R$" + faturamento)


