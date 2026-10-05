/**Parámetros rest. Define una función que reciba 3 parámetros y procese el resto de parámetros recibidos con rest. 
 * La función mostrará los parámetros recibidos.
 * Invócala pasando 5 parámetros para comprobar que funciona.
 */
function resttest(a,b,c,...resto) {
    return a+b+c+resto;
}
console.log(resttest(1,2,3,4,5));
