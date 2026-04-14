import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Emery_s_Universe/',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: false,
  },
})
