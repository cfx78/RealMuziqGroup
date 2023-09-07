import { useState } from 'react';

export default function sendContactForm() {
	const [responseMessage, setResponseMessage] = useState('');

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const response = await fetch('/api/feedback', {
			method: 'POST',
			body: formData,
		});
		const data = await response.json();
		if (data.message) {
			setResponseMessage(data.message);
		}
	}
}
