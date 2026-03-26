const { texto, arquivos } = require('./base');

// * 0 ou n
// + 1 ou n
// ? 0 ou 1
// \ Caractere de escape
// {n, m}  


// console.log(texto)
// const regExp1 = /Gabriel/gi; 
// console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);

  if(!valido) continue;

  console.log(arquivo, valido);
}