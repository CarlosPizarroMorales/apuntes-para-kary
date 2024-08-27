<!-- Esto es HTML directamente como el index.html -->
<template>
  <main>
    <h1>Bievenido a mi CV</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- esto abajo es notación mustache -->
    <!-- dentro de los mustache solo van nombres de variables -->
    <DatosPersonales/>
  </main>
</template>

<!-- Esto es como el index.js asociado al index.html -->
<script>
  import DatosPersonales from './components/DatosPersonales.vue';

// todo componente necesita un objeto export default que tiene propiedades fijas
export default {
  name: 'App',
  components: {
    DatosPersonales,
  }
}
</script>

<!-- este es como el style.css asociado al index.html -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 60%;
  margin: 0 auto;
}
</style>
