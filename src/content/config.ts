import { defineCollection, z } from "astro:content";

const hotwheels = defineCollection({
  schema: z.object({
    title: z.string(),
    model: z.string(),
    year: z.number(),
    letter: z.string(),
    price: z.number(),
    stock: z.number(),
    image: z.string(),
    type: z.string(),
  }),
});

export const collections = {
  hotwheels,
};
