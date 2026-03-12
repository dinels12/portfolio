// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-daniel-suarez.netlify.app",
  // site: "https://danielsuarez.com",
  //   base: "/",
  content: {
    collections: {
      blog: {
        type: "content",
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Instrument Sans",
        cssVariable: "--font-sans",
        weights: [400, 500, 600], // solo estos dos usás en el CSS
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "Lora",
        cssVariable: "--font-display",
        weights: [400, 600, 700], // sacá el 500 y el italic si no lo usás explícitamente
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.fontsource(),
        name: "JetBrains Mono",
        cssVariable: "--font-mono",
        weights: [400, 500, 600], // sacá el 700 y el italic si no los usás
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
  build: {
    format: "file",
    inlineStylesheets: "always",
  },
  trailingSlash: "ignore", // keeps /offer1 without forcing /offer1/,
  vite: {
    plugins: [
      // @ts-expect-error
      tailwindcss({
        optimize: true,
      }),
    ],
    build: {
      cssCodeSplit: true,
      minify: "esbuild",
      cssMinify: true,
    },
  },

  integrations: [
    compress({
      HTML: true,
      Image: false,
      CSS: true,
      JavaScript: true,
    }),
    mdx(),
    sitemap(),
  ],
});
