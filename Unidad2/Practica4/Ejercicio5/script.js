/**Informe de notas de una clase. 
 * Crea un programa que solicite notas de 0 a 10 hasta que se introduzca -1, que será la señal de fin y no se incluirá en los cálculos.
 * Crea una función para comprobar si cada entrada representa una nota válida. 
 * Una entrada vacía, texto no numérico u otro número fuera del intervalo debe rechazarse y volverse a pedir sin terminar la captura.
 * Implementa funciones para clasificar una nota (suspenso, aprobado, notable o sobresaliente) y para calcular la media.
 * La función que calcula la media debe recibir los datos necesarios como argumentos y devolver el resultado, no limitarse a mostrarlo.
 * Al final, muestra cuántas notas válidas se introdujeron, la media con dos decimales, la nota máxima y la mínima.
 * Si no se introdujo ninguna nota, informa de ello sin dividir entre cero.
 * Comprueba, entre otros casos, que la primera entrada sea -1, que haya una sola nota y que se introduzca texto en vez de un número.
 */

function comprobarnota(nota) {
    return !isNaN(nota)&& nota>=0 && nota<=10 && nota!==null&&nota!=undefined &&nota!=="";
}

function clasificarnota(nota){
    if (nota < 5) {
        return "Suspenso";
    } else if (nota < 7) {
        return "Aprobado";
    } else if (nota < 9) {
        return "Notable";
    } else {
        return "Sobresaliente";
    }
}

function media(...notas){
    media=0;
    for(const nota of notas){
        media+=nota;
    }
    media/=notas.length
    return media;
}

let notas =[];
let iterador=true;
do{
    let entrada= prompt("Introduce una nota del 0 al 10 (cualquier valor negativo para de recoger notas)")
    if (comprobarnota(entrada)) {
        let nota =Number(entrada);
        notas.push(nota);
        console.log(`Nota: ${nota} - ${clasificarnota(nota)}`);

    }else{iterador=false;}

}while(iterador)

if (notas.length===0) {
    console.log("No se introdujo ninguna nota valida")
}else{
    //He decidio no poner min y max como literal porque solo los voy a llamar una vez
    console.log(
        "-------------Informe notas------------\n"+
        "Número de notas: "+notas.length+"\n"+
        "Media: "+media(...notas).toFixed(2)+"\n"+
        "Nota máxima: "+Math.max(...notas)+"\n"+
        "Nota minima: "+Math.min(...notas)
    )
}