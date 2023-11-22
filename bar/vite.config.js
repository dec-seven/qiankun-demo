import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  base:  '/' , //'/main/microApps/bar' 部署时此路径应与主应用注册的entry需保持一致
  plugins: [
    vue(),
    qiankun('bar', {
      useDevMode: true
    })
  ],
  server: {
    port: 8082,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
