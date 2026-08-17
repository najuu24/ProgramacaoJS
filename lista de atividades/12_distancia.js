let distancia = 12;
let litros = 2;
let preco = 6;

let km_porLitro = (distancia / litros);
let gasto_total = (litros * preco);

console.log("O carro percorreu " + distancia + "km, gastando " + litros + " litros.")
console.log("O consumo do carro foi de " + km_porLitro + " km/l e o valor total gasto foi de R$" + gasto_total + ".")