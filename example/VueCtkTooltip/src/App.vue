<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app, html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ctk-tooltip {
  padding: 4px 8px;
  background: #000;
  color: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  transform: translateX(-50%);
  z-index: 9999;
  -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>
