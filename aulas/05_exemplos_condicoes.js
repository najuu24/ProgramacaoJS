// Aula 05: Exemplos de condições
let prompt = require('prompt-sync')();

let usuario = prompt("Digite o seu usuário: ")
if(usuario == "Naju"){
    console.log("Acesso liberado!")
} else{
    console.log("Acesso negado! (impostor...)")
}

let idade = parseInt(prompt("Digite sua idade: "))
if(idade > 99) {
    console.log("Idade inválida! Tente novamente...")
}
if(idade <= 0){
    console.log("Idade inválida! Digite uma idade positiva.")
} else{
    console.log("Idade válida!")
}

console.log("A idade digitada foi: " + idade)

