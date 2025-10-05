import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/appdev1-midterm-exam/", // 👈 must match repo name
})