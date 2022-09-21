//Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente

let a = 25
let b = 10
let c = 5

if(a > b && b > c) {
    document.write(`Ordem decrescente dos números: ${a}, ${b}, ${c}`)
}

if(a > c && c > b){
    document.write(`Ordem decrescente dos números: ${a}, ${c}, ${b}`)
}

if(b > a && a > c) {
    document.write(`Ordem decrescente dos números: ${b}, ${a}, ${c}`)
}

if(b > c && c > a) {
    document.write(`Ordem decrescente dos números: ${b}, ${c}, ${a}`)
}

if(c > a && a > b) {
    document.write(`Ordem decrescente dos números: ${c}, ${a}, ${b}`)
}

if(c > b && b > a) {
    document.write(`Ordem decrescente dos números: ${c}, ${b}, ${a}`)
}