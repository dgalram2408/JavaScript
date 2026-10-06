/**Presupuesto de un viaje por carretera. Pide la distancia del viaje en kilómetros, el consumo del vehículo en litros cada 100 km, 
 * el precio del litro de combustible y el número de viajeros.
 * Escribe una función que calcule los litros necesarios y otra que calcule el coste total.
 * Crea además una función que devuelva el coste por viajero; usa un valor predeterminado para el precio del combustible cuando no se proporcione.
 * Valida que distancia y consumo sean mayores que cero, y que precio y número de viajeros sean valores válidos. 
 * Si un dato no es correcto, explica el motivo y vuelve a solicitarlo.
 * Muestra el combustible estimado, el coste total y el coste por viajero con dos decimales. 
 * Añade una función que reciba otra función de cálculo para poder mostrar el coste total o el coste compartido sin duplicar el formato del informe.
 * Verifica el resultado con un viaje de 250 km, consumo de 6 l/100 km, combustible a 1,60 € y 2 viajeros. 
 * Piensa qué debería ocurrir si el número de viajeros fuera cero.
 */
const PRECIO_DEFECTO = 1.60;


function calcularLitros(distancia, consumo) {
    return (distancia * consumo) / 100;
}

function calcularCosteTotal(litros, precio) {
    return litros * precio;
}

function calcularCostePorViajero(costeTotal, viajeros) {
    if (viajeros <= 0) {
        return 0;
    }
    return costeTotal / viajeros;
}

function esMayorCero(valor) {
    return valor !== "" && !isNaN(valor) && Number(valor) > 0;
}
//Pedir al usuario un numero en funcion del mensaje
function pedirNumero(mensaje, nombre) {
    let valor;

    do {
        valor = prompt(mensaje);

        if (!esMayorCero(valor)) {
            //Piensa qué debería ocurrir si el número de viajeros fuera cero.
            //Dejo un mensaje personalizado para este caso y obligo a que ponga un numero>0
            if (nombre==="Número de viajeros") {
                alert("No se puede planificar un viaje sin viajeros")
            }else{
                alert(nombre + " debe ser un número mayor que cero.");
            }
        }
    } while (!esMayorCero(valor));

    return Number(valor);
}

// Pide el precio o utilizar el precio predeterminado
function pedirPrecio() {
    let entrada = prompt(
        "Introduce el precio del combustible por litro " +
        "(pulsa Aceptar sin escribir nada para usar " +
        PRECIO_DEFECTO.toFixed(2) + " €):"
    );

    if (entrada.trim() === "") {
        return PRECIO_DEFECTO;
    }

    if (isNaN(entrada) || Number(entrada) <= 0) {
        alert("El precio debe ser un número mayor que cero.");
        return pedirPrecio();
    }

    return Number(entrada);
}


// Función que reciba otra función de cálculo para poder mostrar el coste total o el coste compartido sin duplicar el formato del informe.
function mostrarCoste(mensaje, funcionCalculo) {
    let resultado = funcionCalculo();

    console.log(mensaje + ": " + resultado.toFixed(2) + " €");
}




let distancia = pedirNumero(
    "Introduce la distancia del viaje en kilómetros:",
    "Distancia"
);

let consumo = pedirNumero(
    "Introduce el consumo del vehículo (litros cada 100 km):",
    "Consumo"
);

let precio = pedirPrecio();

let viajeros = pedirNumero(
    "Introduce el número de viajeros:",
    "Número de viajeros"
);



let litros = calcularLitros(distancia, consumo);

let costeTotal = calcularCosteTotal(litros, precio);

let costePorViajero = calcularCostePorViajero(costeTotal,viajeros);


// Informe
if (viajeros===0) {
    
}else{
    console.log("-----Informe del viaje-----");

console.log("Combustible estimado: " + litros.toFixed(2) + " litros");

mostrarCoste(
    "Coste total",
    function() {
        return costeTotal;
    }
);

mostrarCoste(
    "Coste por viajero",
    function() {
        return costePorViajero;
    }
);
}
