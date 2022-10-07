/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];


let sumArray = 0; // declaramos la variable que sumara todos los elementos del array

function sumNumbers(arr) {

    for (let i = 0; i < arr.length; i++) {// bucle para recorrer la array
        
        sumArray +=arr[i]; // en cada vuelta suma la suma del array que empieza en 0 y suma cada elemento
        
    }

return sumArray/arr.length;
    
}

console.log(sumNumbers(numbers));