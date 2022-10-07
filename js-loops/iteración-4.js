// Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: ': Wormuck',
    race: ': Cucusumusu',
    planet: ': Eden',
    weight: ': 259kg'
}

for (const datos in alien) {
    console.log(datos, alien[datos]);
}