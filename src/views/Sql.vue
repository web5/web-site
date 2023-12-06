<template>
  <div class="app-sql-prettier">
    <div class="app-toolbar">
      <a-space wrap>
        <a-button type="primary" @click="sqlHandle">格式化</a-button>
        <a-button type="primary" @click="copyHandle">复制</a-button>
      </a-space>
    </div>
    <div class="app-edit-panel">
      <div class="app-edit-panel_origin">
        <ATextarea :rows="30" v-model:value="jsOriginValue" />
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
import * as sqlFormatter from 'sql-formatter';
import { MySQL, sql } from '@codemirror/lang-sql';
import CodeMirror from '@/components/codemirror/index.vue'

const jsOriginValue = ref<string>('');
const jsResultValue = ref<string>('');
const { toClipboard } = useClipboard();
const lang =  sql({
  dialect: MySQL,
  upperCaseKeywords: true,
});

onMounted(() => {
  // TODO
})

async function sqlHandle() {
  jsResultValue.value = sqlFormatter.format(jsOriginValue.value);
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
  // jsOriginValue.value = value;

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
