//Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso o sexo seja "F" e estado civil seja "CASADA", solicitar o tempo de casada (anos).
//Primeira tentativa 

let nome = 'Annabeth';
let sexo = 'F';
let estadoCivil = 'casada';

if (sexo === 'F' && estadoCivil === 'casada') {
    let tempo = prompt('Quantos anos tem o casamento?')
    document.write(`Seu tempo de casada é ${tempo} anos`)
} else {
    document.write(`Bem vindo`)
}