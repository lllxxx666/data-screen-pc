import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer"; // 用于分析打包结果
import path from "path";

export default defineConfig({
  plugins: [vue(), visualizer({
    open: true, // 打包完成后自动打开分析页面
    gzipSize: true,
    brotliSize: true,
  })],
  server: {
    open: "/",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    // target: 'esnext',

    assetsInlineLimit: 4096, // 小于此值的资源将内联为base64
    sourcemap: false, // 生产环境通常关闭sourcemap
    minify: "terser", // 代码压缩工具
    terserOptions: {
      compress: {
        drop_console: true, // 移除console.log
        drop_debugger: true, // 移除debugger
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
  root: "src",
});
