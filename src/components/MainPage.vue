<template>
<div class="site-wrapper">
  <Navbar/>
  <TypeEffect/>
</div>
</template>

<script>
import Navbar from "./Navbar.vue";
import TypeEffect from './TypeEffect.vue';

export default {
  name: 'MainPage',
  components: {
    Navbar,
    TypeEffect
  },
}
</script>

<style>
  .site-wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #201c24;
    overflow: hidden;
  }
</style>
