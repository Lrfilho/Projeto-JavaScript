let temDinheiro = true;
let estaEnsolarado = false;
carroEstaNaGaragem = true;

let resultadoE = " #1 (AND)  Vai no Shopping? ";
resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE)

let resultadoOU = " #2 (OR)  Vai no Shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true != true)
console.log(true != false)
console.log(false != true)
console.log(false != false)

console.log("Não verdadeiro: " + !true)
console.log("Não falso: " + !false)