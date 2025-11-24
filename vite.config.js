import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'ec2-54-196-176-226.compute-1.amazonaws.com',
      'ec2-54-81-144-152.compute-1.amazonaws.com',
      'localhost',
      '127.0.0.1'
    ]
  },
  preview: {
    port: 4173,
    host: '0.0.0.0'
  }
})
