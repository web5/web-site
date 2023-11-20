<template>
  <a-config-provider :theme="{
      token: {
        borderRadius: 2,
        wireframe: false,
        colorPrimary: '#FA8C16'
      },
    }">
    <a-layout class="app-root">
      <Header></Header>
      <a-layout-content class="app-content-main">
        <RouterView />
      </a-layout-content>
      <a-layout-footer class="app-footer">
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
  <!--  -->
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import type { CSSProperties } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>

<style scoped>
.app-root {
  width: 100%;
  min-height: 100vh;
  .app-content-main, .app-footer {
    width: 100%;
  }

  .app-content-main {
    width: 100%;
    height: 100%;
    margin-top: 64px;
    padding: 20px;
    min-height: 600px;
    overflow: auto;
  }

}
</style>
