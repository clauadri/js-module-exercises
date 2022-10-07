/* Completa la función que tomando un array de strings como argumento devuelva el más largo,
 en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const noAvengers = [
    "Hulk",
    "Thor",
    "IronMan",
    "Captain Aa.",
    "Spiderman",
    "Captain M.",
  ];
// Primero hacer un bucle for que recorra mi array y crear una variable:
let largestWord = "";

function findLongestWord(arr) {// en parametro se puede poner el array que sea asi vale para cualquiera!!
  for (let i = 0; i < arr.length; i++) {
    // Segundo poner una codicion que sea que cuente las letras de los indices/elementos del array

    if (largestWord.length < arr[i].length) {// si pongo <= al llegar a captain m. se guardara porque es igual y se reasigna
      //si largest word length que es 0 es menor que avengers
      largestWord = arr[i]; // entonces se guarda en la variable
    }
  }
  return largestWord; // para poder guardar el valor en una variables y hay que hacer para que despues se pueda volver a usar
}

console.log(findLongestWord(avengers));
console.log(findLongestWord(noAvengers));