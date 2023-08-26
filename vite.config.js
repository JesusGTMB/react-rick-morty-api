import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://jesusgtmb.github.io/react-rick-morty-api/',
  plugins: [react()],
})
