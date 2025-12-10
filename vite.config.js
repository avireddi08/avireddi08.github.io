// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',        // root since repo is <username>.github.io
  build: {
    sourcemap: false
  }
})
