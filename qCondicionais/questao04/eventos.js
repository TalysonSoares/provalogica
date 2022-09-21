// Primeira tentativa

//declarando variaveis
let a = 20;
let b = 20;
let c = 0;

// colocando condicional if, se o valor de a for igual ao valor de b imprimir na tela o valor de c como resultado da soma de a e b, do contrário imprimir o valor de c como o produto de a * b.
if (a === b) {
    c = a + b; 

    document.write("Igual: ", c);
} else {

    c = a * b;
    document.write("Diferente: ", c);
}