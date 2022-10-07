/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
 y de lo contrario cuente la longitud del string y lo sume.
 Puedes usar este array para probar tu función: */


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let sumTotalNumbers = 0;// creamos variables para number
let sumTotalStrings = 0;// variable string
function averageWord(arr) {
   
    for ( let i = 0; i < arr.length; i++){

       if (typeof arr[i]==='number') {// si la posicion del array es un numero sumar ese numero a la variable
        sumTotalNumbers+=arr[i]
        
       }else if (typeof arr[i]==='string') {
        sumTotalStrings += arr[i].length
       }
        
    }
console.log(sumTotalNumbers);
console.log(sumTotalStrings);
return;
}

console.log(averageWord(mixedElements));

