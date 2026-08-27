// Aula 11: Funções com retorno

let n1 = 6
let n2 = 7

// somarNumeros()
// numeroPositivo()
somar(9, 6)



// Funções com retorno E parâmetros
function somar(n1, n2){
    let soma = n1 + n2
    console.log(`A soma de ${n1} + ${n2} é: ${soma}`)
}



// Funções vazias
function somarNumeros(){
    let soma = n1 + n2
    console.log(`A soma de ${n1} + ${n2} é: ${soma}`)
}



function numeroPositivo(){
    let n1 = -2
    let resposta = "negativo"

    if(n1 >= 0){
        resposta = "positivo"
    }

    console.log(`O número ${n1} é ${resposta}!`)
}