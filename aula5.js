const { alfabeto } = require('./base')

// [abc] - conjuntos
// console.log(alfabeto);
console.log(alfabeto.match(/^[abc]+/gi))
// console.log(alfabeto.match(/[^abc]+/gi))
// console.log(alfabeto.match(/[a-d]+/gi));
// console.log(alfabeto.match(/[ad28]?/gi));
// console.log(alfabeto.match(/[ad28]?/gi).join(''));
// console.log(alfabeto.match(/[a-zA-Z0-9]+/gi));
// console.log(alfabeto.match(/[^a-zA-Z0-9]+/gi));
// console.log(alfabeto.match(/[\u00A0-\u00BA]+/gi));
// console.log(alfabeto.match(/\w+/g)); // todos os caracteres comuns (alfanumerico)
// console.log(alfabeto.match(/\W+/g)); // todos os caracteres comuns (nao alfanumerico)
// console.log(alfabeto.match(/\d+/g)); // todos os caracteres comuns (numericos)
// console.log(alfabeto.match(/\D+/g)); // todos os caracteres comuns (nao numericos)

const cep = '04863-120'

// console.log(cep.match(/\d+/g));
