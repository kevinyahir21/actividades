class PilaLimitada 
    constructor(tamanoMaximo) {
      this.tamanoMaximo = tamanoMaximo;
      this.pila = [];
    }
  
    push(elemento) {
      if (this.pila.length < this.tamanoMaximo) {
        this.pila.push(elemento);
      } else {
        console.log ('La pila está llena. No se pueden agregar más elementos.');
      }
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.pila.pop();
      } else {
        console.log ('La pila está vacía. No se puede realizar pop.');
      }
    }
  
    peek() 
      if (!this.isEmpty()) {
        return this.pila[this.pila.length - 1];
      } else {
        console.log ('La pila está vacía. No se puede realizar peek.');
      }
    
 
  const pila = new PilaLimitada(3); 
  
  pila.push(1);
  pila.push(2);
  pila.push(3);
  pila.push(4);
  
