//1. Crie a variável apartamento e atribua a ela um objeto literal com as
//seguintes propriedades:
//▪quartos = 2
//▪ tipo = “apartamento”
//▪ endereco = “Avenida Principal, 456 - Centro”
//▪andar: 7
//Em seguida, exiba no console a seguinte frase, utilizando todas as
//propriedades da variável casa: "Apartamento com 2 quartos, localizado no 7º
//andar da Av. Principal, 456 - Centro.".
let apartamento = {
quarto: 2,
tipo: 'Apartamento',
endereco: 'Avenida Principal, 456 - Centro',
andar: 7
}
console.log(`Apartamento com ${apartamento.quarto}, localizado no ${andar}º
andar da ${apartamento.endereco}`);

//2
let produtoEmbalado = {
nome: 'Laptop HP',
categoria: 'Eletrônicos',
peso: 1.5,
preco: 3500.00
}
console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está
à venda por R$ ${produtoEmbalado.preco}.`)

//3
class imovel {
constructor(quartos,tipo,endereco) {
this.quartos = quartos;
this.tipo = tipo;
this.endereco = endereco
}
exibirinformaçoes(){
    return`$(this.tipo) com ${this.quartos} quartos, localizado(a) na ${this.endereço}.`;
    }
    }
    
    let casa = new Imovel(3, 'Sobrado', 'Rua da chuva, bairro alagado, n°5354');
    console.log(casa.exibirinformaçoes());
    
    let ap = new Imovel(2, 'apartamento', 'rua do amor, bairro florido, n°9384');
    console.log(ap.exibirinformaçoes());