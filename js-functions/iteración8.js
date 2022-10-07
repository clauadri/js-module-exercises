// Crea una función que nos devuelva el número de veces que se 
// repite cada una de las palabras que lo conforma.  
// Puedes usar este array para probar tu función:


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];


// vamos a comprobar si algo esta dentro de algo

function repeatCounter(arr) {

    let resultObject = {};// creamos un objeto que va a ser el resultado 

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if(element in resultObject){// comprobamos si los elementos estan el en nuevo objeto y si estan que sumen uno y si no que ponga 1 ya que es la primera vez que sale
            resultObject[element]++// si esta el elemento lo sumamos
        }else{
            resultObject[element] = 1;
        }
    }
 return resultObject;// cuando se acaba el bucle que nos de el nuevo objeto
}
console.log(repeatCounter(counterWords));// llamamos a la funcion con el array a recorrer