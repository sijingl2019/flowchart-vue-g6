import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

export default {
    root:'./', // 项目根目录（index.html 文件所在的位置）可以是一个绝对路径，或者一个相对于该配置文件本身的相对路径。
    publicDir: 'public', // 作为静态资源服务的文件夹.该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。
    base: './', // 公共基础路径。改值可以是绝对路径或空字符串
    mode: 'development',
    plugins: [
        vue(),
    ],
    resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
    }
    },
  }