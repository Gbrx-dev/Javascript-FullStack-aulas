const { cpfs, cpfs2 } = require('./base');
// ^ -> Começa com
// $ -> Termina com
// [^] -> Negação
// m - multiline

const cpf = '341.565.570-90';
const cpfRegExp = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm;
console.log(cpfs2.match(cpfRegExp));