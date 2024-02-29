import { defineConfig } from "vite";

export default defineConfig({
  css: {
    // transformer: 'lightningcss'
  },
  build: {
    // cssMinify: 'lightningcss'
  },
  server: {
    port: 3030
  }
});
