<template>
<div class="site-wrapper">
  <Navbar
    v-motion="'custom'"
    :initial="{ opacity: 0, y: -700}"
    :enter="{ opacity: 1, y: 0,}"
  />
  <TypeEffect/>
  <About/>
  <Skills/>
</div>
</template>

<script>
import Navbar from "./Navbar.vue";
import TypeEffect from './TypeEffect.vue';
import About from "./About.vue";
import Skills from "./Skills.vue";

export default {
  name: 'MainPage',
  components: {
    Navbar,
    TypeEffect,
    About,
    Skills,
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
  }
</style>
