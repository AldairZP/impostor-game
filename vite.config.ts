import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    allowedHosts: ["jolly-intropunitive-alene.ngrok-free.dev"],
    host: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "generateSW",
      injectRegister: "auto",
      includeAssets: ["vite.svg"],
      manifest: {
        id: "/",
        name: "Impostor",
        short_name: "Impostor",
        description: "Aplicación web de Impostor",
        start_url: "/",
        scope: "/",
        lang: "es",
        dir: "ltr",
        display: "standalone",
        orientation: "portrait",
        background_color: "#0f172a",
        theme_color: "#0f172a",
        icons: [
          {
            src: "vite.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "vite.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
        shortcuts: [
          {
            name: "Jugadores",
            short_name: "Jugadores",
            url: "/players",
            icons: [
              {
                src: "vite.svg",
                sizes: "192x192",
                type: "image/svg+xml",
              },
            ],
          },
          {
            name: "Principal",
            short_name: "Principal",
            url: "/",
            icons: [
              {
                src: "vite.svg",
                sizes: "192x192",
                type: "image/svg+xml",
              },
            ],
          },
        ],
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,svg,png,ico,txt,json}"],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\/assets\/.*\.(?:js|css|png|jpg|jpeg|svg|webp)$/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /\/api\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-responses",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
      },
    }),
  ],
});
