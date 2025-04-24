// exercicio1 Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.

let a = 8
let b = 2
let soma = a + b
let subtsubtração = a - b
let multiplicação = a * b
let divisão = a / b
console.log(`
    ${a} + ${b} = ${soma}
    ${a} - ${b} = ${subtsubtração}
    ${a} * ${b} = ${multiplicação}
    ${a} / ${b} = ${divisão}
    `);

// exercicio2  Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra
let nome1 = 15
let nome2 = 28
console.log(nome1 == nome2);

// exercicio3 Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.
let idade =15;
let mensagem = idade >18? " maior de idade" : "menor de idade";
console.log(mensagem);

// exercicio4 Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar
let e = 4
let  soma = e % 2
let men = e == 0 ? 'impar' : 'par'

console.log(men)