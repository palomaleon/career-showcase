
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs'
  },
  base: '/career-showcase/',
  server: {
    port: 8080
  }
});
