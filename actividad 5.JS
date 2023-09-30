class libro {
    constructor(titulo, autor, año) {
      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
    }
  }
  
  class biblioteca {
    constructor() {
      this.catalogo = [];
    }
  
    agregarlibro(libro) {
      this.catalogo.push(libro);
    }
  
    eliminarlibroPortitulo(titulo) {
      this.catalogo = this.catalogo.filter((libro) => libro.titulo !== titulo);
    }
  
    editarlibro(titulo, Titulo, Autor, Año) {
      this.catalogo.forEach((libro) => {
        if (libro.titulo === titulo) {
          libro.titulo = Titulo;
          libro.autor = autor;
          libro.año = año;
        }
      });
    }
  
    listarLibros() {
      this.catalogo.forEach((libro) => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.año}`);
      });
    }
  }
  
  // Ejemplo de uso
  const biblioteca = new Biblioteca(); 
  
  const libro1 = new Libro("sword art online", "reki kawahara", 2001);
  const libro2 = new Libro("donquijote de la macha ", "Miguel de Cervantes Saavedra", 1605);

  
  biblioteca.agregarLibro(libro1);
  biblioteca.agregarLibro(libro2);
  
  console.log("Libros de la biblioteca:");
  biblioteca.listarLibros();
  
  biblioteca.eliminarLibroPorTitulo("sword art online");
  
  console.log("\nLibros en la biblioteca después de eliminar 'sword art online':");
  biblioteca.listarLibros();
  
  biblioteca.editarLibroPorTitulo("donquijot de la mancha", "don quijote de la mancha", "miguel de cervantes saavedra", 1605);
  
  console.log("\nLibros en la biblioteca después de editar ' don quijote de la macha ':");
  biblioteca.listarLibros();
  