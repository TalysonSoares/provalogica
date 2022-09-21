// Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes formulas:
//for men: (72.7*h) - 58;
//for women: (62.1 * h) - 44.7.
//first try 

let sexo = 'feminino'
let altura = 1.73

if(sexo == 'masculino') {
    let ideal = 72.7 * altura - 58
    document.write(`Seu peso ideal é: ${ideal}`)
} 

if(sexo == 'feminino') {
    let ideal = 62.1 * altura - 44.7
    document.write(`Seu peso ideal é: ${ideal}`)
}