'use strict'

let numeros = [1, 5, 3, 2, 4]
console.log(numeros.indexOf(7));


function encontrarValor(numero) {
    // Operador ternario
    // sintaxis condicion ? valor : valor
    // condicion ? si la condicion se cumple : si la cond no se cumple
    return numeros.indexOf(numero) > 0
    ? "Valor encontrado"
    : "El valor no esta en el array";
}

console.log(encontrarValor(8));

let nombre = "Gael";


// "use strict";

// //IndexOf para buscar un valor
// let numeros = [1, 5, 3, 2, 4];

// function encontrarValor(numero) {
//   // Operador ternario
//   // Sintaxis condicion ? valor : valor;
//   // condicion ? si la condicion se cumple : condicion no se cumple;
//   return numeros.indexOf(numero) > 0
//     ? "Valor encontrado"
//     : "El valor no esta en el array";
// }

// console.log(encontrarValor(8));

// let nombre = "Daniel";
// console.log(nombre.indexOf("i"));
