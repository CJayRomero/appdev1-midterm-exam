// filepath: c:\appdev1-midterm-exam\vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/appdev1-midterm-exam/", // 👈 must match repo name
  plugins: [react()]
})