import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Yot.Africa/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
