const url="https://pokeapi.co/api/v2/pokemon?limit=5"

async function obtenerpokemons() {
    document.body.innerHTML="<h1>Listado de pokemons<h1>";
    try {
        const respuesta= await fetch(url);
        if(!respuesta.ok){
            throw Error(`Error HTTP; ${respuesta.status}`);
        }
        const recibido = await respuesta.json();
        console.log("Json recibido",recibido);
        console.log("Objeto recibido",typeof recibido);
        console.log("Pokemons",recibido.results);
        crealista(recibido.results);
    } catch (error) {
        console.error("No se pudo obtener listado de pokemons");
        document.body.innerHTML = `
            <h1>Listado de pokemons</h1>
            <p>No se pudo cargar el listado: ${error.message}</p>
        `;
    }
}
function crealista(pkmn){
    const listaHtml=`<ul>${pkmn.map((pkm)=>
        `<li>${pkm.name}</li>`+`<li>${pkm.url}</li>`
    ).join("\n")}</ul>`;
    document.body.innerHTML=listaHtml;
}
async function pkmdess(pkm) {
    
}
obtenerpokemons();