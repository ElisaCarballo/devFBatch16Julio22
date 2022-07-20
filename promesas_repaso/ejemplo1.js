"use strict"

let x = 10

//Se tienen que crear.
// Las promesas, tienen que ser puestas por escrito como un contrato
const promesa = new Promise((resolve, reject) => {
    if (x === 10) {
    return resolve("La promesa se cumpliò, x es igual a 10")
    }
    return reject("La promesa no se cumpliò, x no es igual a 10")
})

// manejar la respuesta de la promesa
promesa
    .then((response) => {
    console.log(response);
})
    .catch((error) => {
    console.error(error);
})