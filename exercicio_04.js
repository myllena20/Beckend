import readline from 'readline-sync';
//Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente
//exercicio 01

//let dia = Number(readline.question("imforme dia da semana: "));
let dia = readline.questionInt("informe um valor de 1 a 7")

switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log( "Quinta-feira");
        break
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log( "Domingo");
        break;
    default:
        console.log("valor invalido! \ninforme o valor no intervalode 1 a 7")
        break;
    }



  // exercicio 2. Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome do mês.

let mês = readline.questionInt("informe o numero do mês: ")

switch (mes) {
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break
    case 3:
        console.log("março");
        break;
    case 4:
        console.log( "abril");
        break
    case 5:
        console.log("maio");
        break;
    case 6:
        console.log("junho");
        break;
    case 7:
        console.log( "julho");
        break;
        case 8:
        console.log("agosto");
        break;
    case 9:
        console.log("setembro");
        break
    case 10:
        console.log("outubro");
        break;
    case 11:
        console.log( "novembro");
        break
    case 12:
        console.log("desembro");
        break;
        default:
        console.log("valor invalido! \ninforme o valor no intervalode 1 a 12")
        break;
    }

    // exercicio 3. Implementar um programa que simule uma calculadora. O usuário deverá
    //informar dois valores e a operação desejada Com auxílio de um switch deve ser computado e mostrado o resultado da
    //operação.

let x = readline.questionFloat("informe o primeiro valor:")
let r = readline.questionFloat("informe o segundo valor: ")
let op = readline.questionInt("escolha a opção :\n [1] soma \n [2] subtração \n [3] multiplicação \n [4] divisão")


switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break
    case 5:
        console.log("opção invalida")
        break;
    }

   // 4. Um funcionário irá receber um aumento de acordo com o seu
   // categoria de bonificação (A,B,C e D).
   // A tabela abaixo mostra o percentual de aumento de cada
   // categoria:
    //Faça um programa que leia a categoria de bonificação e o
    //salário atual de um funcionário, em seguida calcule e
    //imprima o seu novo salário. Use a instrução switch.


import entradaDados from 'readline-sync';

let salario = entradaDados.questionFloat('Informe o valor do seu salário atual: ');
let cat = entradaDados.question('Informe a sua categoria de bonificação: ').toUpperCase();
let bonus = 0;

switch (cat) {
case 'A':
bonus = salario * 0.05
console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
break
case 'B':
bonus = salario * 0.10
console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
break
case 'C':
bonus = salario * 0.15
console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
break
case 'D':
bonus = salario * 0.20
console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
break

default:
console.log('Categoria inválida!')
}

