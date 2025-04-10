function executar(fn) {
    if(typeof fn === "function") {
        console.log(fn());
    }
}


function somar (a, b) {
    return a + b;
}

executar(somar);