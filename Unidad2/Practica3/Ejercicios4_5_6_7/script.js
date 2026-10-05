//4
console.log("-----------EJERICICIO 4-----------");
console.log("Números pares del 1 al 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//5
console.log("-----------EJERICICIO 5-----------");
let suma = 0;
let contador = 0;
let numero;

while (true) {
    numero = parseFloat(prompt("Introduce un número (negativo para terminar):"));
    
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
        continue;
    }
    
    if (numero < 0) {
        break; 
    }
    
    suma += numero;
    contador++;
}

if (contador > 0) {
    let media = suma / contador;
    console.log(`Suma total: ${suma}`);
    console.log(`Media: ${media}`);
} else {
    console.log("No se introdujeron números positivos.");
}
//6
console.log("-----------EJERICICIO 6-----------");
let inicio = parseInt(prompt("Introduce el primer número entero:"));
let fin = parseInt(prompt("Introduce el segundo número entero:"));

if (isNaN(inicio) || isNaN(fin)) {
    console.log("Error: Debes introducir números enteros válidos.");
} else {
    let menor = Math.min(inicio, fin);
    let mayor = Math.max(inicio, fin);
    let resultado = [];

    for (let i = menor; i <= mayor; i++) {
        resultado.push(i);
    }
    console.log(`Números entre ${menor} y ${mayor}: ${resultado.join(", ")}`);
}
//7
console.log("-----------EJERICICIO 7-----------");
const compañeros = ["Ayoub", "Beatriz", "Alberto", "Diego", "Francico Javier","Manuel","Sergio","Jaime","Darío","Adrián","Raúl","Gonzalo","Daniel"];

console.log("Lista de compañeros de clase:");
for (let indice in compañeros) {
    console.log(`Posición ${indice}: ${compañeros[indice]}`);
}
