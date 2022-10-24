<template>
  <MainPage/>
</template>

<script>
import MainPage from './components/MainPage.vue';

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
  cursor: none;
  background-color: #201c24;
  font-family: 'Russo One', sans-serif;
  height: 100%;
  width: 100%;
}
</style>
