//Funciones de la parte con .then
function esperar(ms) {
    return new Promise(respuesta =>{
        setTimeout(()=>{
            respuesta("La espera ha terminado");
        },ms);
    })
}
function obtenerDatos(url) {
    return fetch(url).then(respuesta=>{
            if (!respuesta.ok) {
                throw new Error("Error al obtener datos");
                
            }
            return respuesta.json();
        })
}
function mostrarPokemon(pokemon) {
    console.log(pokemon);
    const nombre = pokemon.name;
    const numero = pokemon.id;
    const tipo = pokemon.types[0].type.name;
    const imagen = pokemon.sprites.other["official-artwork"].front_default;

    document.body.innerHTML += `
        <ul>
            <li><h2>${nombre}</h2></li>
            <li><p>Número: ${numero}</p></li>
            <li><p>Tipo: ${tipo}</p></li>
            <img src="${imagen}" alt="${nombre}" width="175">
        </ul>
    `;
}
//Funcion async
async function cargarPokemon() {
    try {
        document.body.innerHTML = "<h2>Cargando Pokémon...</h2>";
        await esperar(5000);
        document.body.innerHTML="<h2>Lista de pokemons</h2>";
        const datos = await obtenerDatos(
            "https://pokeapi.co/api/v2/pokemon?limit=5"
        );

         const pokemons = datos.results;

         for (const pokemon of pokemons) {
            const infoPokemon= await obtenerDatos(pokemon.url)
            mostrarPokemon(infoPokemon);
         }

    } catch (error) {
        console.error("Error al cargar los Pokémon:", error.message);
    }
}
cargarPokemon();