const { texto } = require('./base')
const regExp1 = /Gabriel|Maria/gi;

// console.log(texto);
// console.log(texto.match(regExp1));
// console.log(texto.replace(/Gabriel|Maria/gi, 'Felipe'));
console.log(texto.replace(/Gabriel|Maria/gi, function(input){
  return input.toUpperCase();
}));