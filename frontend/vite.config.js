import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'ec2-18-189-141-54.us-east-2.compute.amazonaws.com', 
    port: 5173, 
  }
})
