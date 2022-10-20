<template>
<div class="site-wrapper">
  <Navbar/>
  <TypeEffect/>
</div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import TypeEffect from './components/TypeEffect.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    TypeEffect
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  cursor: none;
  background-color: #201c24;
  font-family: 'Russo One', sans-serif;
}
  .site-wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #201c24;
  }
</style>
