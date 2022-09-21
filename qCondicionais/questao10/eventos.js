//Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
//IMC em adultos Condição
//abaixo de 18,5: abaixo do peso
//Entre 18,5 e 25: peso normal
//Entre 25 e 30: Acima do peso
//Acima de 30: Obeso

let peso = 68
let altura = 1.73
let imc = peso/(altura*altura)

if(imc < 18.5){
    document.write(`abaixo do peso`)
}

if(imc > 18.5 && imc < 25){
    document.write(`Peso Normal`)
}

if(imc > 25 && imc < 30){
    document.write(`Acima do peso`)
}

if(imc > 30){
    document.write(`Obeso`)
}
    