/*Catálogo de libros. 
 * Crea una clase Libro para representar libros de una biblioteca y 
 * una clase Catalogo para gestionar una colección de libros.
 * El constructor recibirá título, autor y número de páginas, y guardará esos datos en cada instancia. 
 * Crea además un método describir() que devuelva una descripción completa del libro.
 * Añade un método esExtenso() que indique si el libro tiene al menos 300 páginas.
 * Comprueba este límite con libros que tengan 299 y 300 páginas.
 * Valida los datos al crear el libro: título y autor no pueden estar vacíos y 
 * el número de páginas debe ser un entero mayor que cero. 
 * Decide cómo informar de los datos inválidos y prueba cada caso.
 * Catalogo mantendrá una colección de libros y ofrecerá métodos para añadir un libro, 
 * eliminarlo por título, consultar un libro por título y listar todos los libros. 
 * Decide y documenta qué ocurre si se intenta añadir otro libro con un título ya existente o
 * eliminar o consultar un título que no está en el catálogo.
 * Crea al menos tres instancias de Libro, añádelas al catálogo y muestra la descripción y 
 * el resultado de esExtenso() de cada una. Comprueba el límite de 299 y 300 páginas y 
 * que cambiar el título de una instancia no modifica los títulos de las demás.
 * Prueba añadir, consultar y eliminar libros, así como listar el catálogo antes y 
 * después de los cambios. Comprueba también los casos de título duplicado y de título inexistente, 
 * además de los datos inválidos al crear un libro.
 */



const libro = new Libro("Tres enanos y pico","Angel Sanchidrian",568);
const libro299 = new Libro("Libro corto", "Ana", 299);
const libro300 = new Libro("Libro extenso", "Luis", 300);
libro.describir();

libro299.describir();
libro300.describir();

document.body.innerHTML+="<h1>CATALOGO</h1>"
const catalogo= new Catalogo();
catalogo.addLibro(libro);
catalogo.addLibro(libro299);
catalogo.addLibro(libro299);
document.body.innerHTML+=`<p>Libros registrados: ${catalogo.libros.size}</p>`
catalogo.consultarLibro("Libro corto");
catalogo.consultarLibro("Camino de los reyes");
catalogo.eliminarLibro("Libro corto");
catalogo.consultarLibro("Libro corto");
catalogo.listarLibros();