<script setup lang="ts">
const curYear = new Date().getFullYear();
</script>

<template>
  <div class="app-footer-content">
    Copyright © 2023 - {{curYear}} kedouai.com. All Rights Reserved. 一个橙子 版权所有
  </div>
</template>

<style lang="less" scoped>
.app-footer-content {
  text-align: center;
  color: @primary-font-color;
}
</style>
