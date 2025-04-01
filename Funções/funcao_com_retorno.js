function SempreRetornaUm (){
    return 1000;
}


function TextoOuNumero (retornaTexto) {
    if(retornaTexto) {
        return "Eu sou um texto!";
    } else{
        return 123;
    }
}


let valor = SempreRetornaUm();
console.log(valor);

let texto = TextoOuNumero(true)
console.log(texto)
console.log(TextoOuNumero(false))