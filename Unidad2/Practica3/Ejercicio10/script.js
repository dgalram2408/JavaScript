const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentoUsuario;

do {
    intentoUsuario = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"));

    if (isNaN(intentoUsuario)) {
        console.log("Por favor, introduce un número válido.");
    } else if (intentoUsuario < numeroSecreto) {
        console.log("El número secreto es MAYOR.");
    } else if (intentoUsuario > numeroSecreto) {
        console.log("El número secreto es MENOR.");
    }
} while (intentoUsuario !== numeroSecreto);

console.log(`¡Enhorabuena! Has acertado, el número era el ${numeroSecreto}.`);
