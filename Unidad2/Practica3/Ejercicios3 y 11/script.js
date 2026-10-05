let opcion;

do {
    opcion = prompt(
        "Elige una opción:\n" +
        "1. Usuario principiante\n" +
        "2. Usuario intermedio\n" +
        "3. Usuario avanzado\n" +
        "4. Salir"
    );

    switch (opcion) {
        case "1":
            console.log("Tu nivel es: Principiante");
            break;
        case "2":
            console.log("Tu nivel es: Intermedio");
            break;
        case "3":
            console.log("Tu nivel es: Avanzado");
            break;
        case "4":
            console.log("¡Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Inténtalo de nuevo.");
            break;
    }
} while (opcion !== "4");

