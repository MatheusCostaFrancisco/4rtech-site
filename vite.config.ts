import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

export default defineConfig({
  plugins: [vue()],
  base: "/4rtech-site/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
