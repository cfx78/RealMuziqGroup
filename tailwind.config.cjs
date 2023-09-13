/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'rmg-logo': 'url(./src/images/Real_Muziq_Group_Logo_White.png)',
				t_o: 'url(./src/images/t_o.png)',
				teezy: 'url(./src/images/teezy.png)',
				smoke: 'url(./src/images/smoke.png)',
				studio: 'url(./src/images/studio.png)',
				'rmg-gospel': 'url(./src/images/RMG_Gospel_Logo_White.png)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['black'],
	},
};
