import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  base: "/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  plugins: [react()],
  build:{
    chunkSizeWarningLimit: 1600,
  }
})
