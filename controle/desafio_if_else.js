const a = 10;
const b = 28;
const operacao = '*'; // + - * / %

let resulado;

if (operacao === '+') {
    resulado = a + b;

} else if (operacao === '-') {
    resulado = a - b;
} else if (operacao === '*') {
    resulado = a * b;
} else if (operacao === '/') {
    resulado = a / b;
} else if (operacao === '%') {
    resulado = a % b;
} else {
    resulado = 'Tipo de informação fornecida não valida!'
}




console.log(resulado)