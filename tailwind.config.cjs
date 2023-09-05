/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'rmg-logo':
					'url(public/images/Real_Muziq_Group_Logo_White.png)',
				t_o: 'url(public/images/t_o.jpg)',
				teezy: 'url(public/images/teezy.jpg)',
				smoke: 'url(public/images/smoke.jpg)',
				studio: 'url(public/images/studio.jpg)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['black'],
	},
};
