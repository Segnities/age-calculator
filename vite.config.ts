import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: "Date difference",
        short_name: "DateDiff",
        start_url: '/',
        theme_color: "#ffffff",
        description: "Calculate difference between specified date and now",
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: "192x192",
            type: 'image/png',
            purpose: "maskable"
          },
          {
            src: '/favicon-32x32.png',
            sizes: "512x512",
            type: 'image/png',
            purpose: "maskable"
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, './src') }
    ]
  }
})
