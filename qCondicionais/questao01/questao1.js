//Faça um algoritmo que leia os valores A,B,C e imprima na tela se a soma de a + b é menor que c.
//Primeira tentativa

//Declarando variaveis 
//let a = 30
//let b = 20
//let c = 60

//criando a condicional 
//if(a + b < c) {
//    document.write(a, '+', b ,'<', c);
//}

//resolveu mas acho que poderia mostrar de um jeito melhor na tela.

//Segunda tentativa:
let a = 30
let b = 20
let c = 60
let soma = a + b

if(soma < c) {
    document.write(`${a} + ${b} = ${soma} é menor que ${c}`)
}

//document.write(`a + b = ${soma} é menor que ${c}`)