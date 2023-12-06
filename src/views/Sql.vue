<template>
  <div class="app-sql-prettier">
    <div class="app-toolbar">
      <a-space wrap>
        <a-button type="primary" @click="sqlHandle">格式化</a-button>
        <a-button type="primary" @click="copyHandle">复制</a-button>
      </a-space>
    </div>
    <div class="app-edit-panel">
      <div class="app-edit-panel_orgin">
        <!-- <a-textarea :rows="30" placeholder="输入 原始 JS" v-model:value="jsOriginValue" /> -->
        <CodeMirror :value="jsOriginValue" @change="mirrorChangeHandle"></CodeMirror>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// https://terser.org/
import useClipboard from 'vue-clipboard3'
// https://github.com/JamieCurnow/vue-clipboard3
import { message } from 'ant-design-vue';
import * as sqlFormatter from 'sql-formatter';
import CodeMirror from '@/components/codemirror/index.vue'

const jsOriginValue = ref<string>('');
const jsResultValue = ref<string>('');
const { toClipboard } = useClipboard();

onMounted(() => {
  // TODO
})

async function sqlHandle() {
  jsOriginValue.value = sqlFormatter.format(jsOriginValue.value);
}

const copyHandle = async () => {
  try {
    await toClipboard(jsOriginValue.value);
    message.success('复制成功');
  } catch (e) {
    console.log('toClipboard exception ', e);

  }
}

const mirrorChangeHandle = (value: string) => {
  jsOriginValue.value = value;

}

</script>
<style lang="less" scoped>
.app-edit-panel {
  display: flex;
  margin-top: 20px;
  div {
    flex: 1;
    padding: 10px;
  }
  .app-edit-text {
    border: 1px solid #ddd;
    color: @primary-font-color;
  }
}
</style>
