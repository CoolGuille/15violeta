import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1'
    ? '/15violeta/'  // Para GitHub Pages
    : '/',           // Para Vercel y desarrollo local
})
