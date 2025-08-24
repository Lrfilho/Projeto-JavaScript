const numeros = [1, 2, 3, 4, 5, 6];

//for (let i = 0; i < numeros.length; i++) {
  // console.log(numeros[i]);
    
//}//

//for(let n of numeros){
//    console.log(n);
//}

 function ParaCadaElemento(elemento, _, array) {
    console.log(elemento, array);
 }
numeros.forEach(ParaCadaElemento)
