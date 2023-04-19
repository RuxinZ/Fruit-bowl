import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    // proxy: {
    //   '/api': 'http://localhost:5173' // proxy requests from the client to the server
    // }
  },
  build: {
    outDir: 'build', // output directory for the production build
    manifest: true,
    rollupOptions: {
      input: {
        server: "./server.js", // entry point for the server-side code
        client: "./client/main.jsx" // entry point for the client-side code
      }
    },
  },
})


