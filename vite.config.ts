import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite"; 
import path from 'path';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
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
