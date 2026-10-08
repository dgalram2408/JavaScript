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

class Libro {
    construtor(titulo,autor,paginas) {
        if (titulo=== "" || titulo=== null || titulo=== undefined) {
            throw new Error("Titulo no puede estar vacio");
        }
        if (autor===""|| autor===null || autor === undefined) {
            throw new Error("Autor no puede estar vacio");
        }
        if (isNaN(paginas) || paginas<2 || Number.isInteger(paginas)) {
            throw new Error("El número de paginas es invalido");
        }
        this.titulo=titulo;
        this.autor=autor;
        this.paginas=paginas;
    }

    describir(){
        document.body.innerHTML+=("<h1>"+this.titulo+"</h1>");
        document.body.innerHTML+=("<p>"+this.autor+"</p>");
        document.body.innerHTML+=("<p>"+this.paginas+"</p>");
    
    }
    
    
}

const libro = new Libro(undefined,null,568);
libro.describir();

class Catalogo{
    constructor(...libros){

    }
};