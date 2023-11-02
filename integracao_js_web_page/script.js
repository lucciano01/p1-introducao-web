
let contador = 0
let resultado = document.getElementById('resultado')

function contar(){
    contador++
    resultado.innerHTML =  `<p>O contador está com <mark>${contador}</mark> 
    cliques</p>`
}

function zerar(){
    contador = 0
    resultado.innerHTML =  `<p>O contador está com <mark>${contador}</mark> 
    cliques</p>`
}