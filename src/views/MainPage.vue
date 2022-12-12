<template>
<div class="site-wrapper">
  <Navbar
    v-motion="'custom'"
    :initial="{ opacity: 0, y: -700}"
    :enter="{ opacity: 1, y: 0,}"
  />
  <TypeEffect/>
  <router-view></router-view>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TypeEffect from '../components/TypeEffect.vue';

export default {
  name: 'MainPage',
  components: {
    Navbar,
    TypeEffect,
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
    /* background-image: url("../assets/blob-scene-haikei.svg");
    background-repeat: no-repeat;
    background-size: cover; */
    margin-inline: auto;
    max-width: 1000px;
  }
   ::-webkit-scrollbar {
    width: 12px;
    height: 10px !important;
}
 
/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); 
    -webkit-border-radius: 10px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    height: 5px !important;
    background: rgba(255,255,255, .2); 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    height: 5px !important;
    background: rgba(255,255,255, .6); 
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(255,255,255,0.4); 
}
</style>
