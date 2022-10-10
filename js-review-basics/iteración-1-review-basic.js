// Dado el siguiente javascript usa forof para recorrer el array de películas, 
// genera un nuevo array con las categorías de las películas e imprime 
// por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse. 
// Para filtrar las categorías puedes ayudarte de la función .includes()


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const moviesCategories = [];// definimos el nuevo array donde pusheamos las categorias

for (const movie of movies) { // con el bucle for recorremos el array movies y definimos la constante movie para buscar en ella las categorias

    
    for (const categories of movie.categories) {// buscamos la variable en el array con la caracteristica categories
        
        if (!moviesCategories.includes(categories)) {// si el array moviescategories no tiene categorias
            moviesCategories.push(categories);// mete las categorias que encuentres
                
        }

    }

}
console.log(moviesCategories);