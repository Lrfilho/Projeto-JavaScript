const numeros = [1, 2, 3, 4, 5];

numeros[3] = 2000;
numeros.push(6, 7);


console.log(numeros.join(' - '));
console.log(numeros)
console.log(numeros.includes(100))

const numeros2 = numeros.concat(8, 9, 10);
console.log(numeros2);