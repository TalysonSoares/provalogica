//elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição do pagamento. Utilize os códugos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
//Código de Condição de Pgamento
//À vista em dinheiro ou cheque, recebe 10% de desconto
//À vista no cartão de crédito, recebe 15% de desconto
//Em duas vezes, preço normal de etiqueta sem juros
//Em duas vezes, preço normal de etiqueta mais juros de 10%

let valor = 100
let Fpagamento = 'credito2xx'

if(Fpagamento == 'dinheiro') {                     //if(Fpagamento == 'dinheiro' || "cheque") {   *por algum motivo que eu desconheço ficou aparecendo dois valores, não entendi ao certo 
    let desconto = 0.1
    let total = valor - valor*desconto
    document.write(`Valor a ser pago: ${total}`)
}

if(Fpagamento == 'cheque') {            
    let desconto = 0.1
    let total = valor - valor*desconto
    document.write(`Valor a ser pago: ${total}`)
}

if(Fpagamento == 'credito') {
    let desconto = 0.15
    let total = valor - valor*desconto
    document.write(`Valor a ser pago: ${total}`)
}

if(Fpagamento == 'credito2x') {
    let desconto = 0
    let total = valor - valor*desconto
    document.write(`Valor a ser pago: ${total}`)
}

if(Fpagamento == 'credito2xx') {
    let juros = 0.1
    let total = valor + valor*juros
    document.write(`Valor a ser pago: ${total}`)
}
    