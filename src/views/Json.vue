<template>
  <div class="app-json-prettier">
    <div class="app-toolbar">
      <a-space wrap>
        <a-button type="primary" @click="jsonHandle">格式化</a-button>
        <a-button type="primary" @click="powerJsonHandle">去Key双引号格式化</a-button>
        <a-button type="primary" @click="copyHandle">复制</a-button>
      </a-space>
    </div>
    <div class="app-edit-panel">
      <div class="app-edit-panel_origin">
        <ATextarea :rows="30" v-model:value="jsOriginValue"/>
      </div>
      <div class="app-edit-panel_result">
        <CodeMirror :value="jsResultValue" :lang="lang" readonly></CodeMirror>
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
import { json } from '@codemirror/lang-json';
import CodeMirror from '@/components/codemirror/index.vue'

const jsOriginValue = ref<string>('');
const jsResultValue = ref<string>('');
const { toClipboard } = useClipboard();
const lang = json();

onMounted(() => {
  // TODO
})

async function jsonHandle() {
  const reg = /(\r\n|\n|\r)/gm;
  let result = jsOriginValue.value.replace(reg, '');
  result = JSON.stringify(JSON.parse(result), null, '\t');
  console.log("🚀 ~ file: Json.vue:38 ~ jsonHandle ~ result:", result)
  jsResultValue.value = result;
}

const powerJsonHandle = async () => {
  const reg = /("(\\[^]|[^\\"])*"(?!\s*:))|"((\\[^]|[^\\"])*)"(?=\s*:)/g;
  let result = JSON.stringify(JSON.parse(jsOriginValue.value), null, '\t');
  result =  result.replace(reg, '$1$3');
  jsResultValue.value = result;
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
  // jsResultValue.value = value;

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
