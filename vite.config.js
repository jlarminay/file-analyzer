import {fileURLToPath, URL} from 'url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: ['tailwind-config.js', 'node_modules/**']
    }
  },
  optimizeDeps: {
    include: ['tailwind-config']
  },
  plugins: [
    vue({
      // reactivityTransform: true
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['loader'].includes(tag)
        },
        transformAssetUrls 
      }
    }),
    quasar({
      sassVariables: './src/styles/quasar.scss'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'tailwind-config': fileURLToPath(new URL('./tailwind.config.js', import.meta.url))
    }
  }
})
