import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/background-root.jsx',
      name: 'ReactBitsBackgrounds',
      formats: ['iife'],
      fileName: () => 'react-bits-backgrounds.js',
      cssFileName: 'react-bits-backgrounds'
    },
    outDir: 'dist'
  }
});
