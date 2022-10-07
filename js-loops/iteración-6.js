// Usa un bucle for para recorrer todos los juguetes 
// y elimina los que incluyan la palabra gato. 
// Recuerda que puedes usar la función .includes()
//  para comprobarlo.Puedes usar este array:


const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
]

for (let i = 0; i < toys.length; i++) {
    
    if (toys[i].name.includes('gato')) {// para cada posicion de toys miramos si en el nombre esta la palabra 'gato'
        let eliminado = toys.splice(i,1);// si se cumple la condicion elimino del array toys el elemento que lleve esa palabra.
        i--;// cuando hayas eliminado uno como se modifica el array la 'i' pasara hacer la vuelta 4
        // y el gato felix esta en l posicion 3 por lo tanto no lo borra, entonces le restamos 1 al i para que haga el 3 otra vez y lo borre
        console.log(eliminado);
    }
    
}

console.log(toys);
