class Libro {
    constructor(titulo, autor, paginas) {

        if (titulo.trim() === "" || titulo === null || titulo === undefined) {
            throw new Error("Titulo no puede estar vacio");
        }
        if (autor ===""|| autor ===null || autor === undefined) {
            throw new Error("Autor no puede estar vacio");
        }
        //Compruebo que paginas sea entero
        if (!Number.isInteger(paginas)||paginas < 5) {
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
        if (this.esExtenso()) {
            document.body.innerHTML+=("<p>Este libro es extenso</p>");
        }else {
            document.body.innerHTML += "<p>Este libro no es extenso</p>";
        }
    }
    esExtenso(){
        return this.paginas>=300;
    }
    
}