function executar(fn) {
    if(typeof fn === "function") {
        console.log(fn(90, 40));
    }
}


function somar (a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

executar(somar);
executar(subtrair);
executar(multiplicar);
executar(dividir);