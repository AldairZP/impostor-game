import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["vite.svg"],
      manifest: {
        name: "Impostor",
        short_name: "Impostor",
        description: "Aplicación web de Impostor",
        start_url: "/",
        scope: "/",
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
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{js,css,html,svg,png,ico,txt,json}"],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
