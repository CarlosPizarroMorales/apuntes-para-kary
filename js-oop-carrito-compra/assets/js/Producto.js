class Producto {
  #nombre;
  #precio;
  #cantidad;

  constructor(nombre, precio, cantidad) {
    this.#nombre = nombre;
    this.#precio = precio;
    this.#cantidad = cantidad;
  }

  calcularSubTotal() {
    return this.precio * this.cantidad;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nombre) {
    this.#nombre = nombre;
  }

  get precio() {
    return this.#precio;
  }

  set precio(precio) {
    this.#precio = precio;
  }

  get cantidad() {
    return this.#cantidad;
  }

  set cantidad(cantidad) {
    this.#cantidad = cantidad;
  }
}

export default Producto;