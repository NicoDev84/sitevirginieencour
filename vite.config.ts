import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.JPG'], // Inclure les fichiers .JPG en majuscules
  base: '/sitevirginieencour/', // Ajout de la base URL pour GitHub Pages
})