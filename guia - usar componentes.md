# Usando componentes en Vue

## Primero ¿qué es un componente?

* En Vue es cualquier archivo de tipo *.vue
* App.vue incluso es un componente, podemos decir que es el componente "raíz" de todos los demás.
* Excepto por App.vue los archivos *.vue van localizados en /components o en /views (no por ahora)

Entonces,

## Cómo usar componentes

1. creo un archivo NombreComponente.vue en components/
2. Observa el formato del nombre porque es un requisito:
   1. Son nombres compuestos de al menos 2 palabras.
   2. La primera letra es siempre mayúscula.
   3. La segunda palabra también comienza por mayúscula.
3. `MiComponente.vue` es valido
5. `MiOtroComponente.vue` también es válido
6. `Componente.vue` no es válido.
7. Nombraremos nuestro componente en el objeto exportado:
```vue
<script>
  export default {
    name: "MiComponente",
    props: {...},	// y todas las demás propiedades. Por ahora,
    data() {...},	// solo nos interesa la propiedad "name".
}

```
7. La convención es darle como nombre el mismo nombre de archivo, y no hay motivo para ir contra esta práctica.

---

**Luego, en el COMPONENTE QUE IMPORTARÁ MiComponente.vue:**

1. Lo importo en el `<script>`
2. Lo agrego en la propiedad `components` en el objeto `export default {}`
3. Lo puedo utilizar en `<template>` cuidando de que:
   1. Los componentes son elementos vacíos (no tienen etiqueta de cierre)
   2. Se escriben respetando la capitalización de su nombre (no super estricto pero mejor por ahora)
   3. Se debe poner un slash `/` antes del `>` que cierra la etiqueta.
   4. Resultado para `MiComponente` : `<MiComponente/>`

## Ejemplo práctico

1. Tenemos `/App.vue` y creamos recién un componente `/components/MiListado.vue`
2. Le dimos el nombre según la práctica anterior en `name: 'MiListado'` dentro del objeto `export default {}`
3. En `/App.vue`, que lo importará, el código queda así:
```vue
<template>
  <MiListado/>                                              <!-- PASO 3. USAR EN template -->
</template>

<script>
  import MiListado from './components/MisListado.vue';      // PASO 1. IMPORTAR

  export default {
    name: 'App',
    components: {                                           // PASO 2. DECLARAR EN OBJETO 'components'
      MiListado,
    },
    data() {...} // y todo lo demás que no interesa ahora
</script>

<style>
</style>
```

Como última consideración, esta es una guía simple de flujo de trabajo para crear e importar componentes correctamente, el uso y comunicación entre componentes es tema para muchas otras lecturas.

