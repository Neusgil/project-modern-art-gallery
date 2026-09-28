import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/project-modern-art-gallery/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        location: resolve(import.meta.dirname, "location.html"),
      },
    },
  },
});
