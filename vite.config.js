import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':
        'https://script.google.com/macros/s/AKfycbwPO0AQ3kaqYUZDPJvC4Gk-H9QyCjv-77d6Spa2_ELwvNZEUyTyLxWdMgWnr7v8mMwC/exec',
    },
  },
});
