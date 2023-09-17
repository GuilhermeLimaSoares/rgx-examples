// Flags

// g - global (encontra todas as ocorrências)
// i - incentive - maiúsculas ou minúsculas
// () - grupos
// | ou

const { texto } = require('./base.js');
// const { texto } = { texto: 'Maria e João e Pedro e Carlos e Joao e Matheus e joao' };
// const regExp1 = /João/;
// const regExp1 = /joão/i;
// const regExp1 = /(maria)(, hoje sua esposa)/i;
const regExp1 = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

// console.log(regExp1.test(texto));
// console.log(regExp1.exec(texto).index);
// console.log(texto);
console.log(found[0]);
console.log(found[1]);
console.log(found[2]);