<template>
  <div id="codemirror_container" class="codemirror_container"></div>
</template>
<script setup lang="ts">
import { ref, defineEmits, defineProps, watch, onMounted } from 'vue'
import { type PropType } from 'vue-demi';
import { basicSetup } from 'codemirror';
import { indentWithTab, defaultKeymap } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { search } from '@codemirror/search';
import { EditorState, Compartment } from '@codemirror/state';
import { EditorView, lineNumbers, ViewUpdate, keymap, gutters, gutter } from '@codemirror/view';
import { syntaxHighlighting, defaultHighlightStyle, foldGutter, LanguageSupport } from '@codemirror/language';
import {
  forceLinting,
  linter,
  lintGutter,
  type LintSource,
} from '@codemirror/lint';

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  lang: {
      type: Object as PropType<LanguageSupport>,
      default: () => undefined,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})
const codemiororInstance = ref<EditorView>();
const cursorIndex = ref<number>(0)
const emit = defineEmits(['change']);

const setDocContent = (value: string) => {
    emit('change', value);
 }

const initCodeMirror = (v: string) => {
  const docContent = v;
  const wrapDom = document.getElementById('codemirror_container');
  const language = new Compartment();
  if (wrapDom) {
    if (codemiororInstance.value) {
      codemiororInstance.value.dispatch({
        changes: { from: 0, to: codemiororInstance.value.state.doc.length, insert: docContent },
        selection: {
          anchor: cursorIndex.value,
        },
        scrollIntoView: true,
      });
    } else {
      let startState = null;
      startState = EditorState.create({
        doc: docContent, // 编辑器文本
        extensions: [
          lineNumbers({}), // 显示行号
          EditorView.lineWrapping, // 自动换行
          syntaxHighlighting(defaultHighlightStyle, {
            //语法高亮
            fallback: true,
          }),
          basicSetup,
          props.lang ? language.of(props.lang) : javascript(),
          EditorState.readOnly.of(props.readonly),
          lintGutter(),
          search({
            top: true,
            // caseSensitive: false,
            // literal: false,
            // wholeWord: false,
            // regexp: false,
          }),
          foldGutter({

          }),
          gutter({
          }),
          gutters({
            fixed: true,
          }),
          // oneDark, // 给CodeMirror添加暗黑主题
          keymap.of([indentWithTab, ...defaultKeymap]),
          EditorView.updateListener.of((view: ViewUpdate) => {
            // 监听编辑器内容的改动
            if (view.docChanged) {
              cursorIndex.value = view.state.selection.main.head;
              // this.$emit('update:cursorIndex', cursorIndex);
              const doc = view.state.doc;
              const value = doc.toString();
              setDocContent(value);
            }
          }),
        ],
      });
      let editor = null;
      editor = new EditorView({
        state: startState,
        parent: wrapDom, // 挂载节点
      });

      // 让编辑器内容区可以滚动
      const scrollEl = editor.scrollDOM;
      scrollEl.style.height = '670px';
      scrollEl.style.overflowY = 'auto';
      codemiororInstance.value = editor;
    }
  }
}

watch(
  () => props.value,
  async(newVal) => {
    console.log("🚀 ~ file: index.vue:94 ~ async ~ newVal:", newVal)
    initCodeMirror(newVal);
  }
)
onMounted(() => {
  initCodeMirror(props.value);
})


</script>
<style scoped>
  :deep() .cm-editor {
    background: #fff;
    border: 1px solid #d1dbe5;
  }
  .codemirror_container {
    margin-top: -10px;
  }
</style>

