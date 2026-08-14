import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const examples = defineCollection({
  name: "examples",
  directory: "contents/examples",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    content: z.string(),
  }),
});

export default defineConfig({
  content: [examples],
});
