import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
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
