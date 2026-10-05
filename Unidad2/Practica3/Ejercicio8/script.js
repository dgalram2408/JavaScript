let palabra = prompt("Introduce una palabra:").toLowerCase();
let contadorVocales = 0;
const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];

for (let letra of palabra) {
    if (vocales.includes(letra)) {
        contadorVocales++;
    }
}

console.log(`La palabra "${palabra}" contiene ${contadorVocales} vocales.`);
