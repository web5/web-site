import { fileURLToPath, URL } from 'node:url'
import path from 'node:path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const isProd = process.env.NODE_ENV === 'production';
const ASSET_URL = isProd ? '//website-1254431057.cos.ap-guangzhou.myqcloud.com/portal' : ''

// https://vitejs.dev/config/
export default defineConfig({
  base: `${ASSET_URL}/dist/`,
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
        less: {
            modifyVars: {
                hack: `true; @import (reference) "${path.resolve("src/assets/base.less")}";`,
            },
            javascriptEnabled: true,
        },
    },
  },
})
