import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite"; 
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactRouter()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        /* additionalData: `@use "bootstrap/scss/functions";`, */
        quietDeps: true
      }
      
    }
  },
  resolve: {
    alias: {
      'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  }
})
