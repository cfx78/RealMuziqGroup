/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'rmg-logo': 'url(/images/Real_Muziq_Group_Logo_White.png)',
				t_o: 'url(/images/t_o.jpg)',
				teezy: 'url(/images/teezy.jpg)',
				smoke: 'url(/images/smoke.jpg)',
				studio: 'url(/images/studio.jpg)',
				'rmg-gospel': 'url(/images/RMG_Gospel_Logo_White.png)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['black'],
	},
};
