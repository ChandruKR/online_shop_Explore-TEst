import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: './',
    css: {
      devSourcemap: false
    },
    server: {
    port: 3000,  // Set the port to 3000
    host: true,   // Allow external access (0.0.0.0)
    strictPort: true, // the server fails if the port is already in use
    allowedHosts: [
      '.amazonaws.com' // allow all AWS instances
    ]
  },
});
