//Paso 1. Pedir el listado
const urlListaPokemon = "https://pokeapi.co/api/v2/pokemon?limit=5";

const promesa = fetch(urlListaPokemon);

console.log(promesa);

fetch(urlListaPokemon)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(datos => {
        console.log(datos);
        console.log(typeof datos);
        console.log(datos.results);
    });
//Paso 2. Mostrar los nombres
fetch(urlListaPokemon)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(datos => {
        const listaPokemon = datos.results.map(pokemon => {
            return `<li>${pokemon.name}</li>`;
        });
        const listaHTML = listaPokemon.join("");

        document.body.innerHTML = `
            <h2>Lista de Pokémon</h2>
            <ul>
                ${listaHTML}
            </ul>
        `;
    });
//Paso3.Pedir el detalle de un Pokémon
const urlPikachu= "https://pokeapi.co/api/v2/pokemon/pikachu";
fetch(urlPikachu)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(pokemon => {
        console.log(pokemon)
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.types[0].type.name);
        console.log(pokemon.sprites.other["official-artwork"].front_default);
        const nombre = pokemon.name;
        const numero = pokemon.id;
        const tipo = pokemon.types[0].type.name;
        //Esta imagen me ha convencido mas entre las que he visto
        const imagen = pokemon.sprites.other["official-artwork"].front_default;

        document.body.innerHTML +=`
            <ul>
                <li>${nombre}</li>
                <li>Número: ${numero}<li>
                <li>Tipo: ${tipo}</li>
                <img src="${imagen}" alt="${nombre}" width="175">
            </ul>
        `;
    });
//Paso 4. Encadenar dos peticiones
fetch(urlListaPokemon)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(datos => {
        const urlDetalle = datos.results[0].url;

        return fetch(urlDetalle);
    })
    .then(respuesta => {
        return respuesta.json();
    })
    .then(pokemon => {
        console.log(pokemon);
        console.log(pokemon.name);
        console.log(pokemon.id);
        console.log(pokemon.types[0].type.name);
        console.log(pokemon.sprites.front_default);
        const nombre = pokemon.name;
        const numero = pokemon.id;
        const tipo = pokemon.types[0].type.name;
        const imagen = pokemon.sprites.other["official-artwork"].front_default;
        document.body.innerHTML +=`
            <ul>
                <li>${nombre}</li>
                <li>Número: ${numero}</li>
                <li>Tipo: ${tipo}</li>
                <img src="${imagen}" alt="${nombre}" width="175">
            </ul>
        `;
    })
;
//Paso 5. Crear funciones reutilizables
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
//En este ejmplo al poner todos los apartados hay dos pikachus en pantalla
//Paso 6. Gestionar la carga y los errores
console.log("CARGANDO");
esperar(5000).then(()=>{
    console.log("Pokemon cargado");
    obtenerDatos(urlPikachu)
        .then(pokemon => {
            mostrarPokemon(pokemon);
        })
        .catch(error =>{
            console.error("Ha ocurrido un error:",error.message);
        })
}
);
//Ejemplo del error
obtenerDatos("https://pokeapi.co/api/v2/pokemon/1111111111")
    .then(pokemon => {
        mostrarPokemon(pokemon);
    })
    .catch(error =>{
        console.error("Ha ocurrido un error:",error.message);
    })
;
//Paso 7.Añadir una espera propia
//Cambio en pikachu con funcion
function esperar(ms) {
    return new Promise(respuesta =>{
        setTimeout(()=>{
            respuesta("La espera ha terminado");
        },ms);
    })
}
//Mostrar todos los pokemon de la lista
esperar(10000).then(()=>{
        document.body.innerHTML = "<h2>Cargando Pokémon...</h2>";
        esperar(5000).then(()=>{
            const url= "https://pokeapi.co/api/v2/pokemon?limit=5";
            return obtenerDatos(url);
        }).then(datos=>{
            const pokemons= datos.results;
            document.body.innerHTML = "<h2>Lista de Pokémon</h2>";
            console.log(pokemons);
            pokemons.forEach(pokemon=>{
                obtenerDatos(pokemon.url)
                    .then(datos=>{
                        mostrarPokemon(datos)
                    })
                    .catch(error=>{
                        console.error("Error al cargar un Pokémon:", error);
                    })
            })
        })
        .catch(error=>{
            document.body.innerHTML = "<p>Error al cargar los Pokémon.</p>";
            console.error("Error:", error.message);
        })
    }
)

