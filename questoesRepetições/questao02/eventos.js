let altura = [1.63, 1.45, 1.73, 1.36, 1.24, 1.65, 2.2, 2.02, 2.15, 1.32 , 1.75, 2.5, 2.9, 2.0, 1.78];


let alturaMaxima = 0;
let alturaMinima = altura.length;


for(let h = 0; h < altura.length; h++){
    if(altura[h] > alturaMaxima){
        alturaMaxima = altura[h];
    }
    
    if(altura[h] < alturaMinima){
        alturaMinima = altura[h];
    }
}

document.write(`Altura máxima: ${alturaMaxima} <br>`);
document.write(`Altura mínima: ${alturaMinima}`)



