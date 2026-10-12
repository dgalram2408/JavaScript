class Catalogo{
    constructor(){
        this.libros= new Map
    }

    addLibro(libro){
        if (!(libro instanceof Libro)) {
           throw new Error("El objeto no es un libro válido");
        }

        if (this.libros.has(libro.titulo)) {
            throw new Error("Ya existe un libro con ese título");
        }

        this.libros.set(libro.titulo, libro);
    }
    
    consultarLibro(titulo) {
        document.body.innerHTML += "<h3>-Consulta-</h3>";
        const libro = this.libros.get(titulo);
        if (libro !== undefined) {
                libro.describir();
            } else {
                document.body.innerHTML += "<p>El libro no existe en el catálogo.</p>";
            }
    }

    eliminarLibro(titulo) {
        document.body.innerHTML += "<h3>-Eliminar-</h3>";
        if (!this.libros.has(titulo)) {
            document.body.innerHTML += "<p>El libro dado no existe en el catálogo.</p>";
            return false;
        }

        this.libros.delete(titulo);
        document.body.innerHTML += "<p>El libro ha sido borrado del catalogo</p>";
        return true;
    }

    listarLibros() {
        document.body.innerHTML += "<h1>-Lista completa-</h1>";
        if (this.libros.size === 0) {
            document.body.innerHTML +="<p>El catálogo está vacío.</p>";
            return;
        }

        for (const libro of this.libros.values()) {
            libro.describir();
        }
    }

}
