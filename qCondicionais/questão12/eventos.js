//Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exércicios que fazem parte da avaliação e calcule a média de aproveitamento, usando a fórmula:
//MA: (NOTA1 + NOTA 2*2 + NOTA3*3 + ME)/7
//A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno. suas notas, a média dos exercicios, a média de arpoveitamento, o conceito correspondente e a mensagem "aprovado" se o conceito for a,b ou c, e "reprovado" se o conceito for d ou e.

let identificação = 10
let nota1 = 90
let nota2 = 80
let nota3 = 75
let ME = (nota1 + nota2 + nota3) / 3
let MA = (nota1+ (nota2*2) + (nota3*3) + ME)/7

if(MA >= 90) {
    let a = MA 
    document.write(`Nota final:${a}, <br> Resultado: Aprovado`)
}

if(MA >= 75 && MA < 90) {
    let b = MA
    document.write(`Nota final:${b}, <br> Resultado: Aprovado`)
}

if(MA >=60 && MA < 75) {
    let c = MA
    document.write(`Nota final:${c}, <br> Resultado: Aprovado`)
}

if(MA >=40 && MA < 60) {
    let d = MA
    document.write(`Nota final:${d}, <br> Resultado: Reprovado`)
}

if(MA < 40) {
    let e = MA
    document.write(`Nota final:${e}, <br> Resultado: Reprovado`)
}