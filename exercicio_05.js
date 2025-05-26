import rl from 'readline-sync';


//atividade 01
let num = rl.questionInt("informe o número para a tabuada:")
let cont = 1;
while (cont<=10){
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}

//atividade 02 
let numAlunos = rl.questionInt("informe o numero de alunos da turma: ")

let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos){
    console.log(`Aluno ${contAlunos}`);

    let contBimestres=1;
    let somaNotas = 0;

    while (contBimestres<=4){
        let nota =  rl.questionInt(`informe a nota do ${contBimestres}º bimestre do aluno ${contAlunos}:`);
        somaNotas+= nota;
        contBimestres++;
    }

    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`media do Aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;
}
let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média Geral da turma: ${mediaGeralTurma.toFixed(2)}`);

//atividadde 3 
const numeroAleatorio = Math.floor(Math.random()*100)+1;
let palpite;

do{
    palpite = rl.questionInt("tente adivinhar o  número (entre 1 a 100):");
    if (palpite == numeroAleatorio){
        console.log ("parabens! você adivinhou o numero. ")}
    else if (palpite < numeroAleatorio){
        console.log("tente um número maior ")}
        else{
            console.log("tente númro menor.")}


}while (palpite !==numeroAleatorio);


//atividade 04 
for (let i = 1; i <= 10; 1++){
    let nome  = rl.question(`informe o nome da ${i}º pessoa:`)
    let salario = rl.questionFloat(`informe o salario de ${nome}:`)
    let impostoRenda = 0

    if (salario<=2100){
        impostoRenda = salario * 0.075}
    else if (salario<=3700){
        impostoRenda = salario * 0.015}
    else if (salario <= 4660){
        impostoRenda = salario * 0.025}
    else {
        impostoRenda = salario * 0.275}
    console.log(`imposto de renda a ser pago`)
    console.log(`nome:${nome} \nImposto de renda: ${impostoRenda.toFixed(2)}\n`)
        
    
    

}