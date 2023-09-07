import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import Email from '../emails';
import React from 'react';

const sendEmail =  ({ name, email, message }) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const html = render(Email({ name, email, message }));

	const mailOptions = {
		from: 'cortez.foxx@gmail.com',
		to: 'cortez.foxx@gmail.com',
		subject: `Message from ${name}`,
		html,
	};

	 transporter.sendMail(mailOptions);
};

export default sendEmail;
