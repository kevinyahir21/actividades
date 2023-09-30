
class Empleado {
    constructor(nombre, apellido, id, cargo, salario) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.id = id;
      this.cargo = cargo;
      this.salario = salario;
    }
  }
  
  const listaEmpleados = [];
  

  function agregarEmpleado(nombre, apellido, id, cargo, salario) {
    const empleado = new Empleado(nombre, apellido, id, cargo, salario);
    listaEmpleados.push(empleado);
  }
  
 

function listarEmpleados() {
    console.log("Lista de empleados:");
    listaEmpleados.forEach((empleado) => {
      console.log(`Nombre: ${empleado.nombre}, Apellido: ${empleado.apellido}, ID: ${empleado.id} Cargo: ${empleado.cargo}, Salario: ${empleado.salario}`);
    });
  }
  
  
  function editarEmpleado(nuevoNombre, nuevoApellido, id, nuevoCargo, nuevoSalario) {
    const empleado = listaEmpleados.find((e) => e.id === id);
    if (empleado) {
      empleado.nombre = nuevoNombre;
      empleado.apellido = nuevoApellido;
      empleado.cargo = nuevoCargo;
      empleado.salario = nuevoSalario;
      console.log(`Empleado con ID ${id} editado exitosamente.`);
    } else {
      console.log(`Empleado con ID ${id} no encontrado.`);
    }
  }
  
  // Función para eliminar un empleado por ID
  function eliminarEmpleado(id) {
    const index = listaEmpleados.findIndex((e) => e.id === id);
    if (index !== -1) {
      listaEmpleados.splice(index, 1);
      console.log(`Empleado con ID ${id} eliminado exitosamente.`);

    }
  }
  
  // Ejemplo de uso
  agregarEmpleado("Kevin", "Gomez", "55463", "Tecnico", "10,000");
  agregarEmpleado("Alfredo", "Gomez", "55464", "ventas", "15,000");
  listarEmpleados();
  editarEmpleado("55464", "Alfredo", "Lopez", "ventas", "15,000");
  eliminarEmpleado(55463);
  listarEmpleados(); 