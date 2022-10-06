// Completa la función que tomando dos números como argumento devuelva el más alto.

function highestNumber(numberOne , numberTwo) {
    
    if(numberOne > numberTwo){
        return numberOne

    }else if(numberTwo > numberOne){
        return numberTwo
        
    }else {
        console.log('SON IGUALES');
    }
  }

 highestNumber(20,20)
