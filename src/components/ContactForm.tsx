import { useState } from 'react';

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

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
				<form
					onSubmit={(e) => {
						e.preventDefault();
						console.log(name, email, message);
					}}>
					<h1 className='card-title text-2xl'>Contact Us</h1>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Name</span>
						</label>
						<input
							type='text'
							placeholder='Your name'
							className='input input-bordered'
							name={name}
							onChange={(e) => {
								setName(e.target.value);
								console.log(name);
							}}
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							placeholder='Your email'
							className='input input-bordered'
							name={email}
							onChange={(e) => {
								setEmail(e.target.value);
								console.log(email);
							}}
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Message</span>
						</label>
						<textarea
							placeholder='Message'
							className='textarea h-24 textarea-bordered'
							name={message}
							onChange={(e) => {
								setMessage(e.target.value);
								console.log(message);
							}}></textarea>
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
