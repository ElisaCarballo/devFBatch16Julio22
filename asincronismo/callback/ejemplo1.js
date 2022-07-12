function ordenmayor (otra funcion) {
    return otra funcion()
}

// Ejemplo calculadora
// suma
const suma = (a,b) => {
    return a + b
}

const calculadora  = (a,b, operacion) => {
    return operacion (a,b)
}

console.log(calculadora (5,8, resta))
console.log(calculadora (18, 78, resta))

// resta
const resta = (a,b) => {
    return a - b
}

const calculadora  = (a,b, operacion) => {
    return operacion (a,b)
}

console.log(calculadora (5,8, resta))
console.log(calculadora (18, 78, resta))

// multiplicación
const multiplicacion = (a,b) => {
    return a * b
}

const calculadora  = (a,b, operacion) => {
    return operacion (a,b)
}

console.log(calculadora (5,8, multiplicacion))
console.log(calculadora (18, 78, multiplicacion))

//division
const division = (a,b) => {
    return a / b
}

const calculadora  = (a,b, operacion) => {
    return operacion (a,b)
}

console.log(calculadora (4,2, division))
console.log(calculadora (18, 8, division))

// con menos codigos 
const suma = (a,b) =>  a + b
const resta = (a,b) =>  a - b
const multiplicacion = (a,b) =>  a * b
const division = (a,b) =>  a / b

const calculadora  = (a,b, operacion) =>  operacion (a,b)

console.log(calculadora (4,2, division))
console.log(calculadora (18, 8, division))