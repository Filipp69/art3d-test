import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgSpritePlugin({
      symbolId: 'icon-[name]',
      include: ['src/assets/icons/**/*.svg']
    })
  ],
  
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});