<template>
  <div id="app">
    <img id="logoImg" alt="Vue logo" src="./assets/logo.png">
    <Welcome msg="Welcome to Porky Pie Restaurant"/>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logoImg{
  width: 10%;
}
</style>
