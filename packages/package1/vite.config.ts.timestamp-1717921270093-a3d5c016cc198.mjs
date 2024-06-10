// vite.config.ts
import { defineConfig } from "file:///Users/zhangyaohuang/Desktop/james/work/%E5%85%AC%E5%85%B1%E6%95%B0%E6%8D%AE%E5%B9%B3%E5%8F%B0%E9%83%A8/code/front-monorepo/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.11_less@4.2.0_sass@1.77.2_terser@5.31.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/zhangyaohuang/Desktop/james/work/%E5%85%AC%E5%85%B1%E6%95%B0%E6%8D%AE%E5%B9%B3%E5%8F%B0%E9%83%A8/code/front-monorepo/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_@types+node@20.12.11_less@4.2.0_sass@1.77.2_terser@5.31._nnmfqw4e3g3h5yyoarxcn5zsou/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/zhangyaohuang/Desktop/james/work/%E5%85%AC%E5%85%B1%E6%95%B0%E6%8D%AE%E5%B9%B3%E5%8F%B0%E9%83%A8/code/front-monorepo/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.12.11_rollup@4.17.2_typescript@5.4.5_vite@5.2.11_@types+_dw2icayzqfzktcm3twhg3h4dyi/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: "src/editor.vue",
      name: "vue-monaco-next",
      fileName: "vue-monaco-next",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue", "@vueuse/core", "monaco-editor"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvemhhbmd5YW9odWFuZy9EZXNrdG9wL2phbWVzL3dvcmsvXHU1MTZDXHU1MTcxXHU2NTcwXHU2MzZFXHU1RTczXHU1M0YwXHU5MEU4L2NvZGUvZnJvbnQtbW9ub3JlcG8vcGFja2FnZXMvZGVsdGEtbW9uYWNvLWVkaXRvci12dWUzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvemhhbmd5YW9odWFuZy9EZXNrdG9wL2phbWVzL3dvcmsvXHU1MTZDXHU1MTcxXHU2NTcwXHU2MzZFXHU1RTczXHU1M0YwXHU5MEU4L2NvZGUvZnJvbnQtbW9ub3JlcG8vcGFja2FnZXMvZGVsdGEtbW9uYWNvLWVkaXRvci12dWUzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy96aGFuZ3lhb2h1YW5nL0Rlc2t0b3AvamFtZXMvd29yay8lRTUlODUlQUMlRTUlODUlQjElRTYlOTUlQjAlRTYlOEQlQUUlRTUlQjklQjMlRTUlOEYlQjAlRTklODMlQTgvY29kZS9mcm9udC1tb25vcmVwby9wYWNrYWdlcy9kZWx0YS1tb25hY28tZWRpdG9yLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCBkdHMoKV0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogJ3NyYy9lZGl0b3IudnVlJyxcbiAgICAgIG5hbWU6ICd2dWUtbW9uYWNvLW5leHQnLFxuICAgICAgZmlsZU5hbWU6ICd2dWUtbW9uYWNvLW5leHQnLFxuICAgICAgZm9ybWF0czogWydlcyddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsndnVlJywgJ0B2dWV1c2UvY29yZScsICdtb25hY28tZWRpdG9yJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5aEIsU0FBUyxvQkFBb0I7QUFDdGpCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFFaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxFQUN0QixPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTyxnQkFBZ0IsZUFBZTtBQUFBLE1BQ2pELFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLEtBQUs7QUFBQSxRQUNQO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
