import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Ensure your base path is correct for GH Pages
  base: '/', 
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        softeng: resolve(__dirname, 'softeng.html'), // Add your actual filenames here
        media: resolve(__dirname, 'media.html'),
        business: resolve(__dirname, 'business.html'),
        resume: resolve(__dirname, 'resume.html'),
        comspr: resolve(__dirname, 'comspr.html'),
        hackcomspr: resolve(__dirname, 'hackcomspr.html'),
      },
    },
  },
})
