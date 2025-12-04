// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://heorhi-lukyanau.dev',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: ['4321-ixm1wc7qxou1bnolgkc0n-45032d84.manusvm.computer']
    }
  }
});
