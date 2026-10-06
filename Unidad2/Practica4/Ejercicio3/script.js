/**Operador spread. Define una función que reciba 4 parámetros independientes 
 * (por ejemplo, cuatro nombres o cuatro valores).
 * Invócala, pero en lugar de pasarle los 4 valores, pásale solo un array con los 4 valores 
 * (usa el operador spread).
 */
function spreadtest(a,b,c,d) {
    return a+b+c+d;
}
let array= [1,2,3,4]
console.log(spreadtest(...array));
