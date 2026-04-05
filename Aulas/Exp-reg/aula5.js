const { alfabeto } = require('./base');

//[abc] -> Conjunto [^] -> Negação
//[- 0-9]
//[min-maxQUALQUERCOISA] -> Tudo menos isso
console.log(alfabeto)
console.log(alfabeto.match(/[0-9]+/g))
console.log(alfabeto.match(/[a-k]+/g))
console.log(alfabeto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto.match(/\w+/g))
console.log(alfabeto.match(/\W/g))
console.log(alfabeto.match(/\d+/g))
console.log(alfabeto.match(/\D+/g))
console.log(alfabeto.match(/\s+/g))