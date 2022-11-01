<template>
  <MainPage/>
</template>

<script>
import MainPage from './views/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #201c24;
  font-family: 'Segoe UI', 'Russo One', sans-serif;
  height: 100%;
  width: 100%;
}
</style>
