/**Robot en un pasillo.
 * El pasillo es una secuencia lineal de posiciones: 
 * S indica el punto de inicio, 
 * . una posición libre y # un obstáculo. 
 * El robot recibe las órdenes ["derecha", "derecha", "izquierda", "izquierda"].
 * Guarda el pasillo en un único array y la posición del robot en un índice numérico. 
 * No hace falta guardar fila y columna porque el robot solo puede moverse en una dimensión.
 * Crea una función que calcule el índice de destino según la orden.
 * Si el índice queda fuera del array o la posición contiene #, no muevas el robot y guarda la orden en un array de rechazos.
 * Recorre las órdenes en orden y muestra si se aceptó cada movimiento y la posición actual.
 * Dibuja el estado final marcando al robot como R, sin cambiar el array original del pasillo.
 * Prueba un movimiento válido, uno que choque con un obstáculo y otro que intente salir del pasillo.
 */
//TODO ARREGLAR PROBLEMAS DE PRUEBA NO RESULVE DE MANERA CORRECTA
let pasillo=[".",".",".","#",".","#"];
let movimientorechazado=[];
let movimientos=["derecha", "derecha", "izquierda","izquierda", "izquierda","derecha", "derecha", "izquierda", "izquierda","derecha", "derecha", "izquierda", "izquierda"];
function inicializar(...pasillo) {
    let aleatorio=0;
    do {

        aleatorio= Math.floor((Math.random()*pasillo.length));   
        console.log(aleatorio);
    } while (pasillo[aleatorio]!=="#"); 
    
    pasillo[aleatorio]="S";
    console.log(pasillo.toString());
}

function posicion(mensaje){
    let robot=0;
    for (let i = 0; i < pasillo.length; i++) {
        if (pasillo[i]==="S") {
            robot=i;
        }
    }
    if (mensaje==="derecha") {
        if (pasillo[robot+1]==="#") {
            console.log("Movimiento rechazado");
            movimientorechazado.push(mensaje);
        }else if ((robot+1) >=pasillo.length) {
            console.log("Movimiento rechazado");
            movimientorechazado.push(mensaje);
        } else {
            pasillo[robot+1]="S";
            pasillo[robot]=".";
            console.log("aceptada, posicion del robot "+`${robot+1}`);
        }
    }

    if (mensaje==="izquierda") {
        if (pasillo[robot-1]==="#") {
            console.log("Movimiento rechazado");
            movimientorechazado.push(mensaje);
        }else if ((robot-1) >=0) {
            console.log("Movimiento rechazado");
            movimientorechazado.push(mensaje);
        } else {
            pasillo[robot-1]="S";
            pasillo[robot]=".";
            console.log("aceptada, posicion del robot "+(robot-1));
        }
    }
}
function finalizar(...pasillo) {
    pasillo[pasillo.indexOf("S")]="R";
    console.log(pasillo.toString());
}
inicializar(...pasillo);
console.log
for (const mensaje of movimientos) {
    posicion(mensaje);
}
finalizar();
console.log(pasillo);
console.log(movimientorechazado);