const nomes = ['Jose', 'Maria', 'Pedro']
nomes.map((a =>{
        //console.log(a)
}))

for(var i = 0; i < nomes.length; i++  ){
    //console.log(nomes[i])
}
for(let nome of nomes){
   // console.log(nome)
}

const cores = ['azul', 'amarelo', 'verde']
// console.log(cores.filter(function(c){
//     return c == 'azul'
// }))

cores.forEach(function(cor, indice){
 //   console.log(`${indice + 1} ${cor}`)
})

const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'Celular', preco: 1800, fragil: false},
    {nome: 'TV', preco: 3200, fragil: true}
]

console.log(produtos.filter(function(produto){
   // return produto.preco > 2000
}))

const caro = produto => produto.preco < 5000
const naoFragil = produto => produto.fragil == false

console.log(produtos.filter(caro).filter(naoFragil))

