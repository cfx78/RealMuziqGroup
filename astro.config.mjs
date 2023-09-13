import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	image:{
		service: passthroughImageService(),
	}
	output: 'server',
	integrations: [tailwind(), react()],
	adapter: vercel(),
});
