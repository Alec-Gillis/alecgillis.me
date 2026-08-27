import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import stylex from "@stylexjs/unplugin";

// https://astro.build/config
export default defineConfig({
  site: "https://alecgillis.me",
  vite: {
    plugins: [stylex.vite()],
  },
  integrations: [sitemap()],
});
