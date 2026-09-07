// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// TODO: update this once the site has its real domain, then rebuild —
	// canonical URLs, the sitemap and Open Graph tags all depend on it.
	site: 'https://www.frituurhethalfhuis.be',
	integrations: [sitemap()],
});
