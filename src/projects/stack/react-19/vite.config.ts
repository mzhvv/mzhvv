import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(import.meta.dirname, "./src/app"),
      "@entities": path.resolve(import.meta.dirname, "./src/entities"),
      "@features": path.resolve(import.meta.dirname, "./src/features"),
      "@pages/main": path.resolve(import.meta.dirname, "./src/pages/app"),
      "@pages": path.resolve(import.meta.dirname, "./src/pages/app"),
      "@shared": path.resolve(import.meta.dirname, "./src/shared"),
      "@widgets": path.resolve(import.meta.dirname, "./src/widgets"),
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
