import { ImageResponse } from '@vercel/og';
import { Image } from 'astro:assets';

export const config = {
	runtime: 'edge',
};

export default async function handler() {
	const imageData = await fetch(
		new URL('/Real_Muziq_Group_Logo_Black.png', import.meta.url),
	).then((res) => res.arrayBuffer());
	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					background: '#f6f6f6',
					width: '100%',
					height: '100%',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Image width='256' height='256' src={imageData} />
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	);
}
