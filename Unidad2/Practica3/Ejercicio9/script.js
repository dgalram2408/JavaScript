const contraseniaCorrecta = "Segura";
let intento;

do {
    intento = prompt("Introduce la contraseña:");
    if (intento !== contraseniaCorrecta) {
        console.log("Contraseña incorrecta. Inténtalo de nuevo.");
    }
} while (intento !== contraseniaCorrecta);

console.log("¡Contraseña correcta! Acceso concedido.");
