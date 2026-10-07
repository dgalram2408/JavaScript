/**Juego de adivinar con niveles y puntuación. Genera un número secreto entre 1 y 100 y permite 
 * que la persona juegue varias rondas hasta elegir salir.
 * Presenta un menú de dificultad con switch. Cada nivel establece un número distinto de intentos 
 * mediante una función que devuelva el límite correspondiente.
 * Separa en funciones la generación del número secreto, la validación del intento y la comparación del intento con el número secreto.
 *  Indica si hay que probar con un número mayor o menor y termina la ronda al acertar o agotar los intentos.
 * Mantén la puntuación entre rondas: suma puntos al acertar y resta puntos por cada intento fallido,
 *  sin permitir que una ronda ya terminada siga modificándola. Muestra el resultado de la ronda y la puntuación acumulada.
 * Usa un parámetro predeterminado para permitir iniciar una partida con una dificultad inicial.
 *  Comprueba entradas vacías, texto, números fuera del intervalo, acierto en el último intento y salida antes de empezar una ronda.
 * Evita repetir código entre rondas.
 * 
 */
function generarNumeroSecreto() {
     return Math.floor(Math.random() * 100) + 1;
}

function obtenerIntentos(dificultad) {
    switch (dificultad) {
        case 1:
            return 9;

        case 2:
            return 7;

        case 3:
            return 5;

        default:
            return 9;
    }
}
function validarIntento(intento) {
    //En caso que mande vacio
    if (intento.trim() === "") {
        return false;
    }
    //Obligo a convertir a numero
    const numero = Number(intento);
    //Comprobar si es negativo
    if (!Number.isInteger(numero)) {
        return false;
    }

    if (numero < 1 || numero > 100) {
        return false;
    }

    return true;
}
function compararIntento(intento, numeroSecreto) {
    if (intento === numeroSecreto) {
        return "acierto";
    }

    if (intento < numeroSecreto) {
        return "mayor";
    }

    return "menor";
}
//Elijo mostrar menu a traves de funcion para facilitar la escritura del bucle
function elegirDificultad() {
    console.log("\n--- DIFICULTAD ---");
    console.log("1. Fácil - 9 intentos");
    console.log("2. Normal - 7 intentos");
    console.log("3. Difícil - 5 intentos");
    console.log("0. Salir");
    return prompt("--- DIFICULTAD ---\n"+
        "1. Fácil - 9 intentos\n"+
        "2. Normal - 7 intentos\n"+
        "3. Difícil - 5 intentos\n"+
        "0. Salir"
    )
}

function iniciarJuego(dificultadInicial = 2) {
    let puntuacion = 0;
    let dificultad = dificultadInicial;
    let salir = false;

    while (!salir) {

        

        let opcion = elegirDificultad();
            
        
        //Salida del programa en caso null/No introduce nada en el prompt/ Hace caso al menu y escibe 0
        if (opcion === null || opcion.trim() === "" || opcion === "0") {
            console.log("Has salido del juego.");
            salir = true;
            continue;
        }

        dificultad = Number(opcion);

        if (dificultad !== 1 &&
            dificultad !== 2 &&
            dificultad !== 3) {

            console.log("Opción no válida.");
            continue;
        }

        const intentosMaximos = obtenerIntentos(dificultad);
        const numeroSecreto = generarNumeroSecreto();

        let intentosUsados = 0;
        let acertado = false;
        let rondaTerminada = false;

        console.log("\n--- NUEVA RONDA ---");
        console.log(`Tienes ${intentosMaximos} intentos.`);

        while (intentosUsados < intentosMaximos && !rondaTerminada) {

            let entrada = prompt(
                `Introduce un número entre 1 y 100. ` +
                `Intento ${intentosUsados + 1}/${intentosMaximos}:`
            );

            // Salir durante una ronda
            if (entrada === null) {
                console.log("Has cancelado la ronda.");
                rondaTerminada = true;
                continue;
            }

            if (!validarIntento(entrada)) {
                console.log("Entrada no válida. Introduce un número entero entre 1 y 100.");
                continue;
            }

            const intento = Number(entrada);

            intentosUsados++;

            // Cada intento fallido resta un punto
            const resultado = compararIntento(intento, numeroSecreto);

            if (resultado === "acierto") {

                // Se suma la puntuación por acertar
                puntuacion += 10;

                acertado = true;
                rondaTerminada = true;

                console.log("¡Has acertado!");
                console.log(`Has necesitado ${intentosUsados} intentos.`);

            } else {

                puntuacion--;

                if (resultado === "mayor") {
                    console.log("El número secreto es MAYOR.");
                } else {
                    console.log("El número secreto es MENOR.");
                }

                // Comprobar si era el último intento
                if (intentosUsados === intentosMaximos) {
                    rondaTerminada = true;
                    console.log("Has agotado todos los intentos.");
                    console.log(`El número secreto era ${numeroSecreto}.`);
                }
            }
        }
        console.log("\n--- RESULTADO DE LA RONDA ---");

        if (acertado) {
            console.log("Resultado: ¡Victoria!");
        } else {
            console.log("Resultado: Derrota.");
        }

        console.log(`Puntuación acumulada: ${puntuacion}`);
    }

    console.log(`\nPuntuación final: ${puntuacion}`);
}
iniciarJuego();