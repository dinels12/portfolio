// @ts-check
import mdx from "@astrojs/mdx";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  //   site: "https://danielsuarez.com",
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
        name: "Inter",
        cssVariable: "--font-inter",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Playfair Display",
        cssVariable: "--font-playfair",
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
  ],
});
