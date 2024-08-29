<template>
  <div>
    <figure>
      <img :src="foto" alt="">
      <p v-bind:title="title">{{ caption }}</p>
    </figure>
    <p>Nombre: {{ nombre }}</p>
    <p>Rut: {{ rut }}</p>
    <p>Disponibilidad Inmediata: {{ disponibilidad }}</p>
  </div>
</template>

<script>

export default {
  name: 'DatosPersonales',
  data() {
    return {
      nombre: "María Estela Fake Name",
      rut: '11.111.111-1',
      disponibilidad: true,
      foto: 'https://cdn3.upsocl.com/wp-content/uploads/2014/03/268.jpg',
      title: 'este es un title html de la persona ficticia',
      caption: 'esta es una persona ficticia'
    }
  }
}
</script>

<style scoped>
  div {
    background-color: pink;
    color: rgba(46, 25, 25, 0.753);
    text-align: left;
  }
</style>