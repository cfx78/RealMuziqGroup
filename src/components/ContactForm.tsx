// Date: 09/08/21

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Email from '../emails';

export default function Form() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({});
	console.log(watch());

	// const onSubmit = async (data: any) => {
	// 	console.log('name', data.name);
	// 	console.log('email', data.email);
	// 	console.log('message', data.message);

	// 	// Send email
	// 	const emailData = {
	// 		name: data.name,
	// 		email: data.email,
	// 		message: data.message,
	// 	};

	// 	const response = await fetch('/api/feedback', {
	// 		method: 'POST',
	// 		body: JSON.stringify(emailData),
	// 	});
	// 	const responseData = await response.json();
	// 	console.log('responseData', responseData);
	// 	if (responseData.message) {
	// 		console.log('responseData', responseData.message);
	// 	}
	// };
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

	return (
		<div className='flex flex-col w-full lg:flex-row bg-base-300 mb-24'>
			<div className='grid flex-grow h-full card bg-base-300 rounded-box place-items-center py-6'>
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
			<div className='grid flex-grow h-fit card bg-base-300 rounded-box place-items-center py-6'>
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
							{...register('name', {
								required: 'Sorry but your name is required',
							})}
						/>
						{errors.name && (
							<p className='text-xs max-w-xs text-error mt-2'>
								{errors.name?.message as string}
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
							{...register('email', {
								required: 'Sorry but your email is required',
							})}
						/>
						{errors.email && (
							<p className='text-xs max-w-xs text-error mt-2'>
								{errors.email?.message as string}
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
							name='message'
							{...register('message', {
								required: 'Sorry but a message is required',
							})}></textarea>
						{errors.message && (
							<p className='text-xs max-w-xs text-error mt-2'>
								{errors.message?.message as string}
							</p>
						)}
					</div>
					<div className='card-actions justify-center'>
						<button className='btn btn-primary btn-block mt-2 border-2 '>
							submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
