# Temas de la sesión 2

## Instalación de entorno

- Instalación de NodeJS
- Instalación de GitBash
- Linkear VSCode y Gitbash

## Usar VUE configurando un proyecto Webpack. 
_Páginas 1-9_

Uuuf, pedazo de pérdida de tiempo para un principiante. En teoría aprendes del funcionamiento interno de Vue, pero es solo un ejercicio que repasa conceptos complejos de building y herramientas como Webpack y archivos de configuración que un principiante desconoce y nunca más va a tocar al usar Vue-CLI o Vue+Vite que es el flujo recomendado por VUE.

## Usando VUE desde Vue-CLI
_Páginas 10-15_

- Instalación de `vue/cli`
- Uso de `vue create`

Esto es importante, pero el embrollo de seleccionar features manualmente se puede omitir, evitando hojas de material innecesario. Mejor usar default Vue-3 por ahora hasta familiarizarse con la herramienta vue/cli y el entorno de un proyecto VUE.

## Sintaxis especial de VUE y directivas

- Páginas 15-16: notación de mustache para insertar valores del estado (data)
- Páginas 17: directiva `v-bind` y su atajo `:`
- Páginas 18-20: directiva `v-model` y _two-way data binding_ Uso en input/select/textarea
- Páginas 21-24: directivas `v-if/v-else-if/v-else`
- Páginas 25-29: directiva `v-for`

## Otros

- Uso de arrays en `data()` y creación de métodos que lo modifican por push
- Aplicación contador de likes con renderizado condicional "[no] hay like", etc
- Creación de lista dinámica con v-model y v-for

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