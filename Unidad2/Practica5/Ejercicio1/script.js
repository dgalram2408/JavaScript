/**Analizador de palabras. Analiza esta lista de palabras: ["sol", "montaña", "río", "bosque", "mariposa", "luz", "montaña"].
 * Implementa una función que cuente cuántas veces aparece una palabra indicada.
 *  La comparación distingue entre mayúsculas y minúsculas.
 * Crea otra función que devuelva un array nuevo con las palabras que tienen más de cuatro caracteres.
 * No cambies la lista original.
 * Busca la posición de la primera aparición de una palabra. Si no aparece, devuelve -1.
 * Prueba las funciones con una lista vacía y con una palabra que no esté en la lista.
 */
const lista=["sol","montaña","río","bosque","mariposa","luz","montaña"];
function contar(palabra,array){
    let num=0;
    for (let i = 0; i < array.length; i++) {
        if(palabra.toLowerCase()==array[i].toLowerCase()){
            num++;
        }
    }
    console.log(`Tiene ${palabra} ${num} veces repetidas`);
}
function arraynuevo(array){
    const listanueva=[];
    for (let i = 0; i < array.length; i++) {  
        if (lista[i].length >= 4) {
            listanueva.push(array[i]);    
        }
    }
    return listanueva;
}
contar("montaña",lista);
const array2= arraynuevo(lista);
console.log(array2.toString());

function buscar(palabra,array) {
    if(array.findIndex((texto)=>texto===palabra)!=undefined){
        console,log(array.findIndex((texto)=>texto===palabra));
    }else console.log("No esta el la lista ");  
    
}
buscar("sol",lista);
