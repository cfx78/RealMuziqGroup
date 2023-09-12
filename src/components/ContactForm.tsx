// Date: 09/08/21

import { useState, type FormEventHandler, type FormEvent } from 'react';

import Email from '../emails';

export default function Form() {
	const [nameChecker, setNameChecker] = useState(false);
	const [emailChecker, setEmailChecker] = useState(false);
	const [messageChecker, setMessageChecker] = useState(false);

	const [responseMessage, setResponseMessage] = useState('');

	const submit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);

		if (formData.get('name') === '') {
			setNameChecker(true);
		} else {
			setNameChecker(false);
		}

		if (formData.get('email') === '') {
			setEmailChecker(true);
		} else {
			setEmailChecker(false);
		}

		if (formData.get('message') === '') {
			setMessageChecker(true);
		} else {
			setMessageChecker(false);
		}

		const response = await fetch('/api/feedback', {
			method: 'POST',
			body: formData,
		});
		const data = await response.json();
		if (data.message) {
			setResponseMessage(data.message);
		}
	};

	return (
		<div className='flex flex-col w-full lg:flex-row bg-base-300 mb-24 '>
			<div className='grid flex-grow h-full card bg-base-300 rounded-box place-items-center py-6 border-2  lg:pb-48'>
				<h1 className='card-title text-2xl'>Real Muziq Contacts</h1>
				<div className='space-y-8 pt-6 lg:pt-11'>
					<p className='text-xl '>
						<strong>Email:</strong> rmg@gmail.com
					</p>
					<p className='text-xl'>
						<strong>Phone:</strong> +254 712 345 678
					</p>
					<p className='text-xl'>
						<strong>Studio Address:</strong> 123, Nairobi, Kenya
					</p>
				</div>
			</div>
			<div className='divider bg-base-100 lg:divider-horizontal'>OR</div>
			<div className='grid flex-grow h-fit card bg-base-300 rounded-box place-items-center py-6 border-2'>
				<form onSubmit={submit}>
					<h1 className='card-title text-2xl'>Contact Us</h1>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Name</span>
						</label>
						<input
							type='text'
							placeholder='Your name'
							className='input input-bordered'
							id='name'
							name='name'
						/>
						{nameChecker && (
							<p className='text-xs max-w-xs text-error mt-2'>
								Please enter your name
							</p>
						)}
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							placeholder='Your email'
							className='input input-bordered'
							id='email'
							name='email'
						/>
						{emailChecker && (
							<p className='text-xs max-w-xs text-error mt-2'>
								Please enter your email
							</p>
						)}
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Message</span>
						</label>
						<textarea
							placeholder='Message'
							className='textarea h-24 textarea-bordered'
							id='message'
							name='message'></textarea>
						{messageChecker && (
							<p className='text-xs max-w-xs text-error mt-2'>
								Please enter your message
							</p>
						)}
					</div>

					<div className='card-actions justify-center'>
						<button
							className='btn btn-primary btn-block mt-2 border-2 '
							type='submit'>
							submit
						</button>
					</div>
					{responseMessage === 'Success!' && (
						<div className='mt-2'>
							<p className='text-xs max-w-xs text-success mt-2'>
								Your message has been sent successfully. We will
								get back to you soon. Thank you!
								<a href='/' className='btn btn-block mt-1'>
									Home page
								</a>
							</p>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}
