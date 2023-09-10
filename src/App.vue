<!-- src/App.vue -->

<template>
  <div id="app">
    <Menu />
  </div>
</template>

<script>
import Menu from "./components/AppMenu.vue";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style>
/* 원하는 전역 스타일링 */
</style>
