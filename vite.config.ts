import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const base = process.env.BASE_URL || '/';
  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
    },
  };
})
