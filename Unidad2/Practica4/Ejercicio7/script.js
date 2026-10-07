/**Construye un menú que se repita hasta elegir «Salir».
 * Incluye conversiones entre Celsius y Fahrenheit, kilómetros y millas, y euros y dólares.
 * Usa do...while o while para repetir el menú y switch para decidir qué operación ejecutar.
 * Implementa cada conversión en su propia función; las funciones reciben el valor de entrada y devuelven el convertido.
 * No pongas las fórmulas dentro del switch.
 * Valida que la opción exista y que el valor introducido sea numérico. Si se proporciona una tasa de cambio, usa un valor predeterminado documentado cuando se omita.
 * Añade una función de orden superior para mostrar el resultado con una etiqueta adecuada (por ejemplo, «12 km equivalen a … millas»). El menú debe recuperarse de una opción inválida sin finalizar el programa.
 */
const Conversor_Dolar = 1.10;
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function kilometrosAMillas(kilometros) {
    return kilometros * 0.621371;
}

function millasAKilometros(millas) {
    return millas / 0.621371;
}

function eurosADolares(euros, tasa = Conversor_Dolar) {
    return euros * tasa;
}

function dolaresAEuros(dolares, tasa = Conversor_Dolar) {
    return dolares / tasa;
}

function pedirNumero(mensaje) {
    let valor;

    do {
        valor = prompt(mensaje);

        if (valor === null || valor.trim() === "") {
            console.log("Debes introducir un número.");
            continue;
        }

        valor = Number(valor);

        if (isNaN(valor)) {
            console.log("El valor introducido no es numérico.");
        }

    } while (isNaN(valor));

    return valor;
}
//Uso de Funcion callback mas datos para hacer mensaje perosnalizado
function mostrarResultado(valor, unidadOrigen, unidadDestino, convertir) {
    const resultado = convertir(valor);

    console.log(
        `${valor} ${unidadOrigen} equivalen a ${resultado.toFixed(2)} ${unidadDestino}`
    );
}

let opcion;

do {
    opcion = prompt(`
1. Celsius a Fahrenheit
2. Fahrenheit a Celsius
3. Kilómetros a Millas
4. Millas a Kilómetros
5. Euros a Dólares
6. Dólares a Euros
0. Salir

Selecciona una opción:
`);
switch (opcion) {

        case "1": {
            const celsius = pedirNumero("Introduce los grados Celsius:");

            mostrarResultado(
                celsius,
                "°C",
                "°F",
                celsiusAFahrenheit
            );

            break;
        }

        case "2": {
            const fahrenheit = pedirNumero("Introduce los grados Fahrenheit:");

            mostrarResultado(
                fahrenheit,
                "°F",
                "°C",
                fahrenheitACelsius
            );

            break;
        }

        case "3": {
            const kilometros = pedirNumero("Introduce los kilómetros:");

            mostrarResultado(
                kilometros,
                "km",
                "millas",
                kilometrosAMillas
            );

            break;
        }

        case "4": {
            const millas = pedirNumero("Introduce las millas:");

            mostrarResultado(
                millas,
                "millas",
                "km",
                millasAKilometros
            );

            break;
        }

        case "5": {
            const euros = pedirNumero("Introduce los euros:");

            const tasaIntroducida = prompt(
                `Introduce la tasa EUR/USD o pulsa Aceptar para usar la tasa predeterminada (${Conversor_Dolar}):`
            );

            let tasa = Conversor_Dolar;

            if (tasaIntroducida !== null && tasaIntroducida.trim() !== "") {
                const tasaNumero = Number(tasaIntroducida);

                if (!isNaN(tasaNumero) && tasaNumero > 0) {
                    tasa = tasaNumero;
                } else {
                    console.log(
                        "Tasa no válida. Se utilizará la tasa predeterminada."
                    );
                }
            }

            mostrarResultado(
                euros,
                "€",
                "$",
                valor => eurosADolares(valor, tasa)
            );

            break;
        }

        case "6": {
            const dolares = pedirNumero("Introduce los dólares:");

            const tasaIntroducida = prompt(
                `Introduce la tasa EUR/USD o pulsa Aceptar para usar la tasa predeterminada (${Conversor_Dolar}):`
            );

            let tasa = Conversor_Dolar;

            if (tasaIntroducida !== null && tasaIntroducida.trim() !== "") {
                const tasaNumero = Number(tasaIntroducida);

                if (!isNaN(tasaNumero) && tasaNumero > 0) {
                    tasa = tasaNumero;
                } else {
                    console.log(
                        "Tasa no válida. Se utilizará la tasa predeterminada."
                    );
                }
            }

            mostrarResultado(
                dolares,
                "$",
                "€",
                valor => dolaresAEuros(valor, tasa)
            );

            break;
        }

        case "0":
            console.log("Programa finalizado.");
            break;

        default:
            console.log(
                "Opción no válida. Debes seleccionar una opción del 0 al 6."
            );
    }

} while (opcion !== "0");