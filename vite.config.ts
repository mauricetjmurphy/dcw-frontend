import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import path from "path";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), mdx()],
  // The server bundle only renders pages at build time (scripts/prerender.mjs):
  // it needs none of public/.
  build: { copyPublicDir: !isSsrBuild },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
