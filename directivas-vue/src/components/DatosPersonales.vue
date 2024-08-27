<template>
  <div>
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