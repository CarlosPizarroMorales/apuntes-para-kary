function mostrarMensajeCadaCompra(producto, cant, carrito) {
  console.log(`Su compra es ${producto.nombre} x ${cant} = ${producto.calcularSubTotal()}`);
  console.log(`Su total actual es: ${carrito.calcularTotal()}`);
}

function azarEntre(min, max) {
  return Math.floor(Math.random() * max)+min;
}

export { mostrarMensajeCadaCompra, azarEntre };