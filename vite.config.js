import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
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
