/**Analizador de una secuencia de números. 
 * Implementa analizar(...numeros) para recibir una cantidad variable de números y devolver un informe con la suma, la media, el mínimo y el máximo.
 * Recorre los valores con un bucle; no uses métodos de arrays que todavía no se hayan explicado. 
 * Si no se reciben valores, devuelve un mensaje claro o un resultado que indique que no hay datos.
 * Valida que todos los argumentos sean números finitos. Decide y documenta qué hará la función si recibe un valor inválido;
 *  no debe producir un informe parcial como si todo hubiera sido correcto.
 * Prueba la función con argumentos escritos directamente y con un array expandido mediante spread.
 *  Incluye un array vacío, un único número, valores repetidos y números negativos.
 * Separa el cálculo del formato: una función debe calcular y devolver los resultados, y otra debe presentarlos de forma legible. 
 * Explica por qué usar rest al definir la función y spread al llamarla resuelve problemas opuestos.
 * 
 */
function analizar(...numeros){
    if(numeros.length ===0){
        return null
    }

    for (let i = 0; i < numeros.length; i++) {
        
        if (Number.isNaN(numeros[i]) || !Number.isFinite(numeros[i])) {
            return null;
        }    
    }
    let suma=0;
    let minimo = numeros[0];
    let maximo = numeros[0];

     for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];

        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }

        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    const media = suma / numeros.length;
    return {
        suma: suma,
        media: media,
        minimo: minimo,
        maximo: maximo
    };
}
function mostrarAnalisis(resultado) {
    if (resultado === null) {
        console.log("No hay datos o alguno de los datos no es valido");
        ;
    }else{
    console.log("Informe de resultados:");
    console.log(`Suma: ${resultado.suma}`);
    console.log(`Media: ${resultado.media}`);
    console.log(`Mínimo: ${resultado.minimo}`);
    console.log(`Máximo: ${resultado.maximo}`);
    }
    
}

let prueba1 = analizar(10, 20, 30, 40);

mostrarAnalisis(prueba1);
console.log("------------------------------");
let numeros = [5, 10, 15, 20];

let prueba2 = analizar(...numeros);

mostrarAnalisis(prueba2);
console.log("------------------------------");
mostrarAnalisis(analizar(5, 5, 5, 5));
console.log("------------------------------");
mostrarAnalisis(analizar(-10, -5, -20, 5, 10));
console.log("------------------------------");
mostrarAnalisis(analizar(10, 20, "30", 40));