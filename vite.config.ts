import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
console.log(loadEnv("development", process.cwd()).VUE_APP_BASE_API);
const config = loadEnv('development', process.cwd())
console.log(config);
export default ({ mode }) => defineConfig({
  plugins: [react()],
  server: {
    // 端口
    port: 8001,
    // 代理
    proxy: {
      [loadEnv(mode, process.cwd()).VITE_APP_BASE_API]: {
        // target: "http://120.48.19.218:8088", //开发
        target: "http://180.76.181.67:8088", // 测试
        changeOrigin: true,
        rewrite: (path) => path.replace(loadEnv(mode, process.cwd()).VITE_APP_BASE_API, '')
      },
      '/file': {
        // target: "http://120.48.19.218:6070", //开发
        target: "http://180.76.181.67:6070", // 测试
        changeOrigin: true,
        rewrite: (path) => path.replace('/file', '/file')
      },
    }
  },
  define: {
    'process.env': process.env
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${resolve(__dirname, 'src/styles/theme.less')}";`,
        javascriptEnabled: true,
      }
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, './src') },
      { find: "^", replacement: resolve(__dirname, './src/components') },
    ]
  },
})
