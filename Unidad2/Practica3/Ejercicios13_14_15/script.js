//13
console.log("-----------EJERICICIO 13-----------");
let numDivisores = parseInt(prompt("Introduce un número para calcular sus divisores:"));
let divisores = [];
if (isNaN(numDivisores) || numDivisores <= 0) {
    console.log("Por favor, introduce un número entero positivo mayor que cero.");
} else {
    for (let i = 1; i <= numDivisores; i++) {
        if (numDivisores % i === 0) {
            divisores.push(i);
        }
    }
    console.log(`Los divisores de ${numDivisores} son:`);
    for(num in divisores){
        console.log(divisores[num])
    }
}
//14
console.log("-----------EJERICICIO 14-----------");
let numParImpar = parseInt(prompt("Introduce un número para saber si es par o impar:"));

if (isNaN(numParImpar)) {
    console.log("No has introducido un número válido.");
} else {
    if (numParImpar % 2 === 0) {
        console.log(`El número ${numParImpar} es PAR.`);
    } else {
        console.log(`El número ${numParImpar} es IMPAR.`);
    }
}
//15
console.log("-----------EJERICICIO 15-----------");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("FIN");
