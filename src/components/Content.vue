<template>
  <div class="app-content-wrapper">
    <div class="app-content-item-nav">
      <a href="/uglify"><div class="app-content-item-nav_content">代码压缩</div></a>
    </div>
    <div class="app-content-item-nav">
      <a href="/sql"><div class="app-content-item-nav_content">SQL美化</div></a>
    </div>
    <div class="app-content-item-nav">
      <a href="/json"><div class="app-content-item-nav_content">JSON格式化</div></a>
    </div>
    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">代码对比</div>
    </div>

    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">
        数据表格(建设中)
      </div>
    </div>
    <div class="app-content-item-nav">
      <div class="app-content-item-nav_content">
        拖拽交互(建设中)
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.app-content-wrapper {
  // display: grid;
  // grid-template-columns: 16.67% 16.67% 16.67% 16.67% 16.67% 16.67%;
  // grid-template-rows: 33.33% 33.33% 33.33%;
  /* grid-template-columns: 1fr 1fr; */
  display: flex;
  .app-content-item-nav {
    display: flex;
    flex: 1;
    width: 16.67%;
    padding: 10px;
    a {
      display: inline-block;
      width: 100%;
      height: 180px;
    }
    .app-content-item-nav_content {
      background-color: @bg-color;
      color: @bg-f-color;
      width: 100%;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
}
</style>
