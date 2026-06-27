// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import llmsTxt from '@alexcarol/astro-llms-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://fetchurl.github.io',
  base: '/',
  integrations: [
    mdx(),
    // Generates /llms.txt and /llms-full.txt from the static build output
    llmsTxt({
      name: 'fetchurl',
      titleSource: 'h1',
      excludedPaths: ['404'],
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
