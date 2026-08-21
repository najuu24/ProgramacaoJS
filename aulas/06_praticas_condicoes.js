// Aula 06: Práticas com condições
let prompt = require('prompt-sync')();

let preco_sp = 125.00
let preco_araraq = 68.90
let preco_seguro = 42.50

let total = 0

console.log("\nEscolha seu destino: ")
console.log("1 - São Paulo por R$" +preco_sp)
console.log("2 - Araraquara por R$" +preco_araraq + "\n")

let resposta = parseInt(prompt("Digite uma opção: "))
if (resposta == 1){
    total = preco_sp
} 
if (resposta == 2){
    total = preco_araraq
}

console.log("Sua escolha foi: " +resposta + ".")
console.log("Atualmente, o total da sua compra é de: R$" + total + "\n")

let seguro = prompt("Deseja adicionar um seguro por +R$" +preco_seguro + "? ")
if(seguro == "SIM"){
    total = total + preco_seguro
}
if(seguro == "NÃO"){
    console.log("Opção sem seguro.")
}

console.log("Sua escolha foi: " + seguro + ".")
console.log("Total atual: R$" + total + "\n")

let cupom = prompt("Digite seu cupom de desconto: ")
if(cupom == "NAJU10"){
    let desconto = total * 0.10
    total = total - desconto
    console.log("\nParabéns, você recebeu 10% de desconto na sua próxima viagem!")
    console.log("Total atual: R$" + total)
} else {
    console.log("\nEste cupom não existe.")
}
console.log("")

let promo_email = prompt("Você gostaria de receber promoções no seu e-mail? (SIM / NÃO): ")
if(promo_email == "SIM"){
    console.log("Obrigado por se registrar, você receberá novos e-mails em breve.")
} 
if( promo_email == "NAO"){
 console.log("Ok, você não receberá e-mails de promoções.")
}
console.log("\nO total da viagem é de: R$" +total + "\n")

console.log("Formas de pagamento: ")
console.log("1 - Cartão de crédito (acréscimo de 5%)")
console.log("2 - PIX (desconto de 5%)")
resposta = prompt("Escolha uma opção: ")

if(resposta == "1"){
    total = total * 1.05


    // let desconto = total * 0.05
    // total = total + desconto
} else{
    total = total * 0.95
}

console.log("Valor final: R$" + total.toFixed(2) + "\n")

console.log("Obrigado e volte sempre!")
