let hoy = new Date();

// a
console.log("Día del mes:", hoy.getDate());

// b
console.log("Mes:", hoy.getMonth() + 1);//getMonth empieza en 0

// c
console.log("c. Año:", hoy.getFullYear());

// d
let formatoCompleto = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' }).format(hoy);
console.log("d. Fecha completa:", formatoCompleto);
