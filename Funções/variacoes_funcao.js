//Função com parametro e retorno

function somar(a, b) {
    return a + b;
}



let resultado =  somar( 30, 56);
console.log(`O resultado finao é: ${resultado}`);
console.log(`O resultado finao é: ${somar(30, 56)}`);

// #2 Função com parametro e sem retorno 

function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10, 36)
exibirMultiplicacao(78, 19)

//#3Função sem parametro e com retorno

function retornarDataAtual(){
    return new Date();
}

console.log(retornarDataAtual());

//Função sem parametro e sem retorno
function exibirHoraAtual(){
    console.log(new Date().getMonth())
}
exibirHoraAtual()