import catalogo from './catalogo.js';                       // importamos recursos
import Carrito from './Carrito.js';
import Producto from './Producto.js';
import { mostrarMensajeCadaCompra, azarEntre } from './utils.js';

/**
 * Este código simula la interacción entre un usuario y nuestro programa,
 * se elige una cantidad al azar de compras (compras) que imita el caso en 
 * que el usuario es invitado a seguir comprando hasta decir no, y dentro 
 * del ciclo basado en compras, se elige un índice del catálogo al azar 
 * (variable prod) y una cantidad al azar (hasta 4, variable cant). Con
 * estos valores se procede a crear una instancia de Producto que luego es
 * agregada a carrito (instancia de Carrito). Se muestra un mensaje al
 * usuario tras cada compra y también un resumen de la compra al final.
 */

const carrito = new Carrito();                              // creamos una instancia de Carrito
const maxIndex = catalogo.length;                           // obtenemos el length de catalógo

const compras = azarEntre(1, 10);                           // cantidad de compras al azar hasta 10
for (let i = 0; i <= compras; i++) {                        // simulamos "seguir comprando" hasta 'compras'
  const prod = azarEntre(0, maxIndex);                      // elegimos un indice de catalogo al azar  
  const cant = azarEntre(1, 4);                             // elegimos una cantidad al azar hasta 4
  const producto = new Producto(catalogo[prod].nombre,      // creamos instancia de Producto con prod y cant
                                catalogo[prod].precio, 
                                cant);
  carrito.agregarProducto(producto);                        // agregamos el producto al carrito
  mostrarMensajeCadaCompra(producto, cant, carrito);        // mensajes al usuario tras cada compra
}

console.log(carrito.mostrarDetalle());                      // mensaje resumen de la compra