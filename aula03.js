// quantificadores

const { arquivos } = require('./base');

// * (opcional) 0 ou n {0,}
// + (obrigatorio) 1 ou n
// ? (opicional) 0 ou 1
// \ Caractere de escape - utilizar ponto ou outro caractere especial
// . (Qualquer caractere) 1
// {n, m}
// {10,} no mínimo 10
// {,10} de 0 a 10
// {5, 10} de 5 a 10
// ^ nega a condicao 
// [] conjuntos
// [0-9] - range delimita


// console.log(texto);

// const regExp1 = /Jo+ão/gi;

// console.log(texto.match(regExp1));

// const regExp2 = /\./;
// const regExp2 = /\.jpg/gi;
// const regExp2 = /\.jpe?g/gi;
// const regExp2 = /\.jpe{0,}g/gi;
// const regExp2 = /\.jp(e|E)?g/g;
const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos) {
	// console.log(arquivo.match(regExp2));
	const valido = arquivo.match(regExp2);
	console.log(arquivo + ' - ' + valido);
}
