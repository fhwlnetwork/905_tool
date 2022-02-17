<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <header-iput />
    <showmessage />

    
  </div>
</template>

<script>


import HeaderIput from "./components/HeaderIput.vue";

import Showmessage from './components/showmessage.vue';


export default {
  name: "App",
  components: {
    HeaderIput,
    Showmessage,
  

  },
    
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
