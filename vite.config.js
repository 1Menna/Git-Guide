import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        about: resolve(__dirname, 'src/About.html'),
        learn: resolve(__dirname, 'src/learn.html'),
        lesson: resolve(__dirname, 'src/lesson.html'),
      }
    }
  }
})
