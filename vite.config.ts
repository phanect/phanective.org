import { defineConfig } from "vite";

export default defineConfig({
  build: {
    polyfillModulePreload: false,
  },
  server: {
    port: 3000,
  },
});
