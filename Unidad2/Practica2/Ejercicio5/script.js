let edad = parseInt(prompt("Introduce tu edad:"));
let notaMedia = parseFloat(prompt("Introduce tu nota media (con tres decimales):"));

// f
if (isNaN(edad) || isNaN(notaMedia) || notaMedia < 0 || notaMedia > 10 || notaMedia === 0) {
    console.log("Error: Datos no válidos, nota fuera del rango 0-10 o división por cero (nota media es 0).");
} else {
    // a
    console.log("Nota con dos decimales:", notaMedia.toFixed(2));

    // b
    let suma = edad + notaMedia;
    let resta = edad - notaMedia;
    let mult = edad * notaMedia;
    let div = edad / notaMedia;

    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", mult);
    console.log("División:", div);

    // c
    let divString = div.toString();
    console.log("División como string:", divString);

    // d
    let esValido = true;

    // e
    console.log("Tipos de variables:");
    console.log("- edad:", typeof edad);
    console.log("- notaMedia:", typeof notaMedia);
    console.log("- divString:", typeof divString);
    console.log("- esValido:", typeof esValido);
}
