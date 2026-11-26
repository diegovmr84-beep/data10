// Posts do Blog em Markdown, publicados pelo escritório da Data10 depois da
// aprovação do Diego (o Marketing escreve, o Diego aprova, o escritório grava
// aqui e o deploy sai sozinho). Um arquivo por post: src/content/blog/<slug>.md,
// com a capa opcional em src/assets/blog/<slug>.<ext>.
// Os posts antigos, feitos à mão em src/pages/blog/<slug>.astro, continuam
// valendo (lista em src/data/blog-posts.mjs).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(10).max(120),
      description: z.string().min(30).max(200),
      excerpt: z.string().min(30).max(300),
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      readingMinutes: z.number().int().min(1).max(60),
      cover: image().optional(),
      coverAlt: z.string().max(200).optional(),
    }),
});

export const collections = { blog };
