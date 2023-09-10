import type { APIRoute } from 'astro';
import { render } from '@react-email/render';
import { Resend } from 'resend';
// import nodemailer from 'nodemailer';
import emailTemplate from '../../emails/index.tsx';

export const POST: APIRoute = async ({ request }) => {
	const resend = new Resend('re_hwDjvfUQ_M8dzxkVjzkeruBspXiqfQTKh');
	const data = await request.formData();
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const message = data.get('message') as string;
	// Validate the data - you'll probably want to do more than this
	if (!name || !email || !message) {
		return new Response(
			JSON.stringify({
				message: 'Missing required fields',
			}),
			{ status: 400 },
		);
	}
	// Do something with the data, then return a success response
	resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'cortez.foxx@icloud.com',
		subject: 'New Message From Real Muziq Website',
		react: emailTemplate({ name, email, message }),
	});

	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Message:', message);
	return new Response(
		JSON.stringify({
			message: 'Success!',
		}),
		{ status: 200 },
	);
};
