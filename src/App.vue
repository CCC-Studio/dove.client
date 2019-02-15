<template>
  <div id="app">
    <LogIn/>
  </div>
</template>

<script>
import LogIn from './components/LogIn.vue'

export default {
  name: 'app',
  components: {
    LogIn
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  margin: 0%;
}
</style>
