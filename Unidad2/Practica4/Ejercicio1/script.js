/**Conversor de euros a dólares. Define una función que transforme euros a dólares.
 * Normalmente 1 $ = 1,01 €; este valor debe estar definido como parámetro por defecto y permitir cambiarlo cuando el precio varíe.
 * Invoca a la función para que se ejecute, tanto con el valor por defecto como indicando otro.
 */
function conversion(euro,conversor=1.01) {
    return euro/conversor;
}

console.log(conversion(3,1.05));
console.log(conversion(1.01));
console.log(conversion(3));