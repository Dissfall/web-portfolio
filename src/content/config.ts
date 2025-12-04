import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    category: z.string(),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    image: z.string().optional(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };

