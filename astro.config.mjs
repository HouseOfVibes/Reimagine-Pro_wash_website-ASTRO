import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://rprowashnc.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    imagesConfig: {
      domains: ['rprowashnc.com'],
      sizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      formats: ['image/avif', 'image/webp'],
    },
  }),
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: 'https://rprowashnc.com/sitemap-index.xml',
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/private/'],
        },
      ],
    }),
  ],
});
