import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Optional: specify the exact preview hostname provided by Builder if Vite blocks it.
const previewHosts = (process.env.BUILDER_ALLOWED_HOSTS || '')
  .split(',')
  .map((host) => host.trim())
  .filter(Boolean);

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: previewHosts,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: previewHosts,
  },
  build: { outDir: 'dist' },
});
