let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));


if (isNaN(num1) || isNaN(num2) ){
    console.log("Ambos valores deben ser números válidos y distintos de cero.");
}else if( num1 === 0 || num2 === 0) {
    console.log("Ambos valores deben ser distintos de cero.");
} else {
    
    if (num1 === num2) {
        console.log("Los dos números son iguales.");
    } else if (num1 > num2) {
        console.log("El primer número (${num1}) es mayor que el segundo (${num2}).");
    } else {
        console.log("El segundo número (${num2}) es mayor que el primero (${num1}).");
    }
}
