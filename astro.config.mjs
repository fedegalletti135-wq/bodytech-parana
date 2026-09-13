import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { siteConfig } from "./src/config/site";

// SSG puro: Sin adapters de servidor. Genera HTML estático pre-renderizado para el Edge CDN de Cloudflare.
export default defineConfig({
  site: siteConfig.siteUrl,
  output: "static",
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    assets: "_astro",
  },
});
