// Dado el siguiente javascript usa forof y forin para hacer la media del 
// volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]


let sumTotalVolumen = 0;
let numVecesVolumen = 0;

// primero quiero aceder a la zona que necesito
for (const user of users) {
    console.log(user);
    
    for (const sounds in user.favoritesSounds) {// recoger de cada usuario su sonido fav

       sumTotalVolumen += (user.favoritesSounds[sounds].volume);// aceder a favorite sounds atraves de la llave sound y acediendo a la propiedad volume

        numVecesVolumen++;//cuenta cada vez que encuentra un sonido favorito sume de 1 en 1 un elemento volumen
    }
    
   
}

console.log(sumTotalVolumen);
console.log(numVecesVolumen);
console.log(sumTotalVolumen/numVecesVolumen);// la media