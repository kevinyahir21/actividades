class Estudiante {
    constructor(nombre, matricula) {
      this.nombre = nombre;
      this.matricula = matricula;
      this.notas = [];
    }
  
    agregarNota(nota) {
      this.notas.push(nota);
    }
  
    obtenerPromedio() {
      if (this.notas.length === 0) {
        return 0;
      }
  
      const sumaNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
      return sumaNotas / this.notas.length;
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Matrícula: ${this.matricula}`);
      console.log(`notas: ${this.notas.join(', ')}`);
      console.log(`Promedio de notas: ${this.obtenerPromedio()}`);
    }
  } 
  
  
  const estudiante1 = new Estudiante('Kevin Gomez', '1928603818');
  estudiante1.agregarNota(100);
  estudiante1.agregarNota(87);
  estudiante1.agregarNota(90);
  
  estudiante1.mostrarDatos();
  
  const estudiante2 = new Estudiante('Alfredo Lopez', '1928603919');
  estudiante2.agregarNota(79);
  estudiante2.agregarNota(88);
  estudiante2.agregarNota(60);
  
  estudiante2.mostrarDatos();
  