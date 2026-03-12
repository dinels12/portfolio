// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    // ... other frontmatter properties
  }),
});

export const collections = {
  blog: blogCollection,
};
