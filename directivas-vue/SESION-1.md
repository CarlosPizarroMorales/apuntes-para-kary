# Temas de la sesión 1

## Usar VUE desde un CDN. 

Es una pérdida de tiempo para un principiante, pues VUE no solo puede ser integrado en un proyecto de diversas maneras, sino que además ofrece diferentes variantes en cada tipo de integración que no vale la pena aprender.

Acá se trabajará con aplicaciones creadas con Vue-CLI (Webpack) usando Vue3 bajo el esquema SPA que utiliza VUE SFC. Aprender esto es vital y el único foco. Punto.

## Directivas VUE

Esto es muy importante. Las directivas revisadas al peo son:

1. v-bind (atajo :)
2. v-on (atajo @)

## Propiedades del objeto VUE

Muy importante también. Son propiedades que van dentro del objeto `export default`. Las propiedades vistas al peo son:

```js
export default {
  el: "app",              // este no se utilizará en aplicaciones VUE SPA 
  data() {                // MUY IMPORTANTE. ACÁ VIVE EL 'ESTADO' DEL COMPONENTE
    return {
      // variables de mi componente como propiedades de este objeto
    }
  },
  methods: {              // acá se escriben las funciones de mi index.js
    saludaPorConsole() {
      console.log('Hola!');
    },
    saludaPorAlert() {
      alert('Hola!');
    },
  }
}
```

## Proyecto de práctica

- Contador de likes con `@click` y métodos para sumar y agregar a `data.likes`