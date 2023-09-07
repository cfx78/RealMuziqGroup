import {
	Container,
	Font,
	Head,
	Heading,
	Hr,
	Html,
	Section,
	Tailwind,
	Text,
} from '@react-email/components';

type Props = {
	name: string;
	email: string;
	message: string;
};
const Email = ({ name, email, message }: Props) => {
	return (
		<Html lang='en'>
			<Head>
				<Font
					webFont={{
						url: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap',
						format: 'woff2',
					}}
					fontFamily={'Roboto'}
					fallbackFontFamily={'Arial'}
				/>
			</Head>
			<Tailwind>
				<Container className='bg-white text-center min-h-full min-w-full'>
					<Heading className='text-4xl'>
						New message from Real Muziq Website
					</Heading>
					<Hr className='my-4' />
					<Section className='text-left'>
						<Text>
							<strong>Name:</strong> {name}
						</Text>
						<Text>
							<strong>Email:</strong> {email}
						</Text>
						<Text>
							<strong>Message:</strong> {message}
						</Text>
					</Section>
				</Container>
			</Tailwind>
		</Html>
	);
};

export default Email;
