let nota = 10;

switch (Math.ceil(nota)) {
  
    case 10:
    case 9:
    case 8:
     console.log('Parabéns');
        break;
    case 7:
    case 6:
    
        console.log('Recuperação');
        break;

    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        console.log('Reprovado');
        break;

        default :
        console.log('Nota inválida!');
        



}