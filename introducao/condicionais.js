
function resultado(nota){
    if(nota >= 7){
        console.log("Aprovado com " + nota)
    }else{
        console.log("Reprovado com " + nota)
    }
       
}
resultado(9)
resultado(4)

const imprimirResultado = function (nota){
    switch(nota) {
        case 10:
        case 9:
        case 8:
        case 7:
            console.log("Aprovado" + nota)
        break; 

        case 6:
        case 5:
        case 4:
           console.log("Recuperacao" + nota)
        break;   
    }
}
