// Crea una función que reciba por parámetro un array 
// y el valor que desea comprobar que existe dentro de dicho array - 
// comprueba si existe el elemento, en caso que existan 
// nos devuelve la posición de dicho elemento 
// y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

// como el enunciado dice que busquemos un valor dentro de ese array
function finderName(arr, valor) {
   

    for (let i = 0; i < arr.length; i++) {// recorremos el array
        
        if (arr[i].includes(valor)) {// con el includes comprobamos si el valor esta en el array

            return console.log(true, i)// si esta sera true

        }else{
            return console.log(false)// si no esta sera false
        }
    }
 
}
finderName(nameFinder, 'Peter');



