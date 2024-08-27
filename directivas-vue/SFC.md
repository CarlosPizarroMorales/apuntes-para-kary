
# Qué es un SFC

Single File Component es un tipo de archivo en VUE de extensión *.vue que funciona como un 3-en-1.  
Tiene el HTML, el CSS y el Javascript de mi página/aplicación en un solo archivo.

Eso lo hace usando elementos clave que no pueden faltar o cambiarse y son:

```js
<template>
  <!-- aca va el HTML de este archivo -->
</template>

<script>
  <!-- aca va el JS de este archivo -->
</script>

<style>
  <!-- aca va el CSS de este archivo -->
</style>
```

## El objecto export default

Esta es una parte crítica de cualquier componente, pues VUE la busca para saber cuáles son las "opciones" del componente.  

Y lo sabe a través de ciertas propiedades que son fijas y hay que aprender y conocer su funcionalidad.

El base es:
```js
export default {
  name: "NombreDelComponente",
  components: {
    ComponenteImportado1,
    // ComponenteImportadoN,
  },
  props: {
    // datos que pasará un componente padre
  },
  data(){
    return {
      // MUY IMPORTANTE. ACÁ está el ESTADO del componente.
      nombreVariable1: valor1,
      nombreVariable2: valor2,
    }
  },
  methods: {
    funcion1() {

    },
    // funcionN() {},
  }
}
```