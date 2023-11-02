function funcao1(){
   console.log("Função 1")
}

const resultado = function () {
    console.log("Funçao 2 ")
}

funcao1()
resultado()

//function somar( a , b){
   // console.log(a+b)
//   return a + b
//}
//console.log(somar( 3, 5))

function somar( a , b){
    // console.log(a+b)
    return a + b
}
//const calculo = [function(x,y){ return x + y},  somar(a,b)]
//console.log(calculo[1](30,30))

const pessoa = {}
pessoa.falar = function(){ return "Olá"}
//console.log(pessoa.falar())

function run(funcao){
    funcao()
}

function teste(){
   // console.log("Executou a funcao")
}

run(teste)

function soma(){
    let resultado = 0
    for(i in arguments){
        resultado += arguments[i]
    }
    return resultado
}

//console.log(soma())
//console.log(soma(5,10, 20, 50))
function exemploDobro(numero){
    if(numero <= 0){
        return 0;
    }
    return numero * 5
}

outroExemplo = (numero) => {
    console.log("Exemplo")
    return numero * 10
}

dobro = numero => numero * 5

console.log(dobro(2))
