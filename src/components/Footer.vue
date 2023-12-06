<script setup lang="ts">
const curYear = new Date().getFullYear();
</script>

<template>
  <div class="app-footer-content">
    <div class="app-footer-content-item">Copyright © 2023 - {{curYear}} kedouai.com. All Rights Reserved. 一个橙子 版权所有</div>
    <div class="app-footer-content-item">
      <span>
        备案号:
        <a href="https://beian.miit.gov.cn/">粤ICP备2021031984号</a>
        <img src="http://www.beian.gov.cn/img/new/gongan.png">
    </span>
      公安备案号:
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030902002737">44030902002737号</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-footer-content {
  text-align: center;
  color: @primary-font-color;
  .app-footer-content-item {
    margin: 10px 0;
  }
}
</style>
