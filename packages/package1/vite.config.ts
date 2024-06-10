import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts(), vueJsx()],
  build: {
    outDir: './dist',
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      name: '@golderbrother/package1',
      // fileName: '@golderbrother/package1',
      fileName: (format: string) => `golderbrother-package1.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'monaco-editor'],
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
