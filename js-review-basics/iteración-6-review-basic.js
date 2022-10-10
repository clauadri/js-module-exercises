// Crea una función llamada `swap()` que reciba un array y dos parametros 
// que sean indices del array. La función deberá intercambiar la posición 
// de los valores de los indices que hayamos enviado como parametro. 
// Retorna el array resultante.

// Sugerencia de array:

let futbolistas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];


function swap(array, param1, param2) {
    
    let intercambioPosicion = array[param1];
    array[param1]= array[param2];
    array[param2]=intercambioPosicion;
    return array;
}
console.log(swap(futbolistas, 1,3));// cambio la posicion 1 por la posicion 3
