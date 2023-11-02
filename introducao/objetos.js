const produto = {
    nome : "Iphone",
    preco : 1500,
    modelo: "Xyz"
}

//console.log(produto.nome)

const celular = {}
celular.modelo = "Samsung"
celular.preco = 900
//console.log(celular)

let pessoas = [
    { nome : 'Jose',
      idade: 20  
    },
    {
       nome: 'Pedro',
       idade: 19 
    },
    {
        nome: 'Maria',
        idade: 25
    }
 ]

 pessoas.map((p => {
   // console.log(p)
 }))

 let jose = {nome:  'Jose', idade: 20, 
            endereco : {rua: 'Pca Joao Pessoa', numero: 20, bairro: 'Por do Sol'}}
let maria = {nome:  'Maria', idade: 40, 
            endereco : {rua: 'Av Major Coutinho', numero: 320, bairro: 'Praia'}}
let pedro = {nome:  'Pedro', idade: 35, 
            endereco : {rua: 'Sto Antonio', numero: 120, bairro: 'Centro'}}

const clientes = [jose, maria, pedro]

//clientes.map((c => {
//    console.log("Nome: ", c.nome, " - Rua: ", c.endereco.bairro)
//}))

//clientes.push("Carro")
//clientes.pop()
clientes.shift()

for(let cliente of clientes){
    console.log(cliente)
}