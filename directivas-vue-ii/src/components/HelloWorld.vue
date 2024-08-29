<template>
  <main class="hello">
    <input type="color" v-model="colorLetra">

    <form v-on:submit.prevent="mostrarDatos">
      <label for="">
        Edad:
        <input type="number" v-model="edadIngresada" min="19" max="100">
      </label>
      <label for="">
        Telefono:
        <input type="text" v-model="telefonoIngresado">
      </label>
      <input type="submit" value="Enviar Datos">
      <!-- <input type="submit" value="Enviar Datos" @submit.prevent="mostrarDatos"> -->
    </form>
    <h1>DATOS</h1>
    <p>NOMBRE: {{ msg }}</p>
    <p>EDAD: {{ edadMostrada }}</p>
    <p>TELEFONO: {{ telefonoMostrado }}</p>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      edadIngresada: 0,
      edadMostrada: 0,
      telefonoIngresado: '',
      telefonoMostrado: '',
      colorLetra: '',
    }
  },
  methods: {
    mostrarDatos() {
      console.log('holaaaa');
      this.edadMostrada = this.edadIngresada;
      this.telefonoMostrado = this.telefonoIngresado;
      this.edadIngresada = '';
      this.telefonoIngresado = '';
      alert(`Su nombre es ${ this.msg }, su edad ${ this.edadMostrada } y su telefono es ${ this.telefonoMostrado }`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main.hello {
  color: v-bind(colorLetra);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
