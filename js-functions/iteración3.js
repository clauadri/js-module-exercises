/* Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y 
devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función: */

const numbers = [1, 2, 3, 5, 45, 37, 58];

let sumArray = 0; // declaramos la variable que sumara todos los elementos del array

function sumNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {// bucle para recorrer la array
        
        sumArray +=arr[i]; // en cada vuelta suma la suma del array que empieza en 0 y suma cada elemento
        
    }

return sumArray;
    
}

console.log(sumNumbers(numbers));
