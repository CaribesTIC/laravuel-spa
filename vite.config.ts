import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  define: {
    'process.env': {
      VUE_APP_API_URL: "http://localhost:8000" //"http://backend.entrepreneur.com",        
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
})
