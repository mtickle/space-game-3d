import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/space-game-3d/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // '@layout': path.resolve(__dirname, 'src/components/layout'),
      '@components': path.resolve(__dirname, 'src/components'),
      // '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      // '@hooks': path.resolve(__dirname, 'src/hooks'),
      // '@config': path.resolve(__dirname, 'src/config'),
      // '@assets': path.resolve(__dirname, 'src/assets'),
      // '@layouts': path.resolve(__dirname, 'src/layouts'),
      // '@stores': path.resolve(__dirname, 'src/stores'),
    },
  },
})
