<template>
  <div class="app-js-uglify">
    <div class="app-toolbar">
      <a-space wrap>
        <a-button type="primary" @click="gulifyHandle">压缩</a-button>
        <a-button type="primary" @click="copyHandle">复制压缩后代码</a-button>
      </a-space>
    </div>
    <div class="app-edit-panel">
      <div class="app-edit-panel_origin">
        <CodeMirror :value="jsOriginValue" :lang="lang" @change="mirrorChangeHandle"></CodeMirror>
      </div>
      <div class="app-edit-panel_result">
        <ATextarea :rows="30" readonly v-model:value="jsResultValue" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { minify } from "terser";
import { javascript } from '@codemirror/lang-javascript';
// https://terser.org/
import useClipboard from 'vue-clipboard3'
// https://github.com/JamieCurnow/vue-clipboard3
import { message } from 'ant-design-vue';
import CodeMirror from '@/components/codemirror/index.vue'

const jsOriginValue = ref<string>('');
const jsResultValue = ref<string>('');
const { toClipboard } = useClipboard();

const lang = javascript();

onMounted(() => {
  // TODO
})

async function gulifyHandle() {
  const originValue = await minify(jsOriginValue.value, {

  });
  console.log("🚀 ~ file: UglifyJS.vue:35 ~ gulifyHandle ~ originValue:", originValue.code);
  jsResultValue.value = originValue.code || ''
}

const copyHandle = async () => {
  try {
    await toClipboard(jsResultValue.value);
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
