<template>
  <a-layout-header class="app-header">
    <div class="app-header-wrapper">
      <div class="app-header-logo">One Orange(一个橙子)</div>
      <div class="app-header-menu"></div>
    </div>
  </a-layout-header>

</template>
<script setup lang="ts">
</script>
<style scoped>
.app-header {
  width: 100%;
  background: #FF9933;
  position: fixed;
  z-index: 1000;
}
.app-header-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .app-header-logo {
    width: 400px;
    color: #fff;
    display: flex;
    flex: 1;
  }
  .app-header-menu {
    display: flex;
    flex: 1;
  }
}
</style>

