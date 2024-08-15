class Carrito {
  #productos = [];
  
  get productos() {
    return this.#productos;
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    this.productos.forEach(p => total += p.calcularSubTotal());
    return total;
  }

  mostrarDetalle() {
    const header = 'El detalle de su compra es:';
    const footer = 'y el total es: '
    let main = '';
    this.#productos
      .forEach(p => main += (p.nombre + ' x ' + p.cantidad + ' = ' + p.calcularSubTotal() + '\n'));
    return `
${header}
${main}
${footer} ${this.calcularTotal()}`;
  }
}

export default Carrito;