<template>
  <div class="app-content-wrapper">
    <div class="app-content-item-nav">
      <a href="/uglify"><div class="app-content-item-nav_content">代码压缩</div></a>
    </div>
    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">Sql美化</div>
    </div>
    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">代码对比</div>
    </div>
    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">JSON格式化</div>
    </div>
    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">数据表格Demo</div>
    </div>
    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">拖拽交互</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-content-wrapper {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  // grid-template-rows: 33.33% 33.33% 33.33%;
  /* grid-template-columns: 1fr 1fr; */
  .app-content-item-nav {
    padding: 10px;
    .app-content-item-nav_content {
      background-color: @bg-color;
      color: @bg-f-color;
      height: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
}
</style>
