/* Crea una función que reciba por parámetro un array
 y compruebe si existen elementos duplicados,
  en caso que existan los elimina para retornar un array sin los elementos duplicados. 
Puedes usar este array para probar tu función: */


const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'pasta',
    'soda'
]

// function checkDuplicated(arr){

//   let arrayUnique = []
//   arr.forEach(element => {//for each ejecuta la funcion por cada elemento
//     if(!arrayUnique.includes(element)){// el metodo includes comprueba si hay un determinado elemento en el array
//       arrayUnique.push(element);
//     }
//   });
//   return arrayUnique;
// }

// console.log(checkDuplicated(duplicates));// llamada a la funcion

// santi solucion

function checkDuplicated(arr){

  for (let i = 0; i < arr.length; i++) {// mira cada palabra
    for (let j = i + 1; j < arr.length; j++) {// j=i+1 para que enpiece uno por delante que el bucle i
      if (arr[i] === arr[j]) {//si son iguales significa que hay algun elemento duplicado
        arr.splice(j, 1);
        j--;// para cotrarestar la j++ y que no me sume la posicion para que no me salte posiciones cuando splice borre una y modifique la matriz
      } 
    }
  }
  return arr;
}
console.log(checkDuplicated(duplicates));


