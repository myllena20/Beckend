//bom dia
console.log("hello, world!")

let valor =10 
let outrovalor = valor //passagem como valor-> passa uma copia do valor
console.log("valor: " + valor)
console.log("outro valor: " + outrovalor)
outrovalor = 15
console.log("valor: " + valor)
console.log("outro valor: " + outrovalor)

let carro ={
    cor : "azul"
}

let bicicleta = carro //passagem como referencia -> passa o rndereço do objeto na

console.log("carro:"+ carro.cor)
console.log("bicicleta:"+ bicicleta.cor )

bicicleta.cor = "verde"
console.log("carro:" + carro.cor)
console.log("bicicleta:" + bicicleta.cor)