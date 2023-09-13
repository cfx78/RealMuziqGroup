/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'rmg-logo': 'url(/Real_Muziq_Group_Logo_White.png)',
				t_o: 'url(/t_o.png)',
				teezy: 'url(/teezy.png)',
				smoke: 'url(/smoke.png)',
				studio: 'url(/studio.png)',
				'rmg-gospel': 'url(/RMG_Gospel_Logo_White.png)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['black'],
	},
};
