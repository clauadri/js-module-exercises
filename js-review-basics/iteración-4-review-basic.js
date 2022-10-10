// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos
//  y un texto y devuelve la posición del array cuando el valor del array sea igual al 
//  valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función


const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


function findArrayIndex(array, text) {
    
    for (let i = 0; i < array.length; i++) {
        
        
        if (array[i] === text) {// si la posicion de array es igual al texto devuelve la posicion del array
            return [i];// devuelve el la posicion en la que son iguales
            
        }
    }

}
console.log(findArrayIndex(animals,'Caracol'));

