import starTrek from './starTrek.gif';
import j from './j.jpg';
import bella from './bella.jpg';

const AboutMeText = () => {
	const list = [
		{
			term: 'My special sauce',
			body: 'is solving complex technical problems through a user-focused lens and fostering enthusiastic collaboration between engineering teams and cross-functional partners.',
		},
		{
			// eslint-disable-next-line quotes
			term: "I'm at my happiest",
			// eslint-disable-next-line quotes
			body: "when I'm learning new technology, mentoring other engineers, or finally getting the live code to match pixel-for-pixel with the mocks.",
		},
		{
			term: 'My love language',
			// eslint-disable-next-line quotes
			body: "is React, but I'm always eager to add to my stack.",
		},
	];

	return (
		<div className='flex flex-col gap-4 xl:px-60'>
			<p>
				Hi! I&apos;m Bailee Dastugue (I say &quot;Dast-ooh&quot;, but any
				creative pronunciation of my last name is welcome). I&apos;m a software
				engineer working across the stack and primarily in the JavaScript
				ecosystem.
			</p>
			<ul className='flex flex-col gap-2 lg:px-16'>
				{list.map(bulletpoint => (
					<li key={bulletpoint.term}>
						<dfn>{bulletpoint.term}</dfn> {bulletpoint.body}
					</li>
				))}
			</ul>
			<p>
				Outside of work, I&apos;m eating my way through Austin with my husband,
				rewatching Star Trek, or trying to keep my 14-year-old tabby cat away
				from whichever Ina Garten recipe I&apos;m baking (frequently, her{' '}
				<a
					rel='noreferrer'
					href='https://barefootcontessa.com/recipes/cranberry-orange-scones'
					target='_blank'
					className='underline'
				>
					cranberry orange scones
				</a>
				).
			</p>
			<div className='flex flex-wrap'>
				<img
					src={j}
					className='w-1/2 p-1 lg:w-1/4'
					alt='Man with brown hair, brown eyes, and glasses sitting in a restaurant and smiling'
				/>
				<img
					src={bella}
					className='w-1/2 p-1 lg:w-1/4'
					alt='Brown tabby cat sitting on a kitchen counter with frosting on her nose'
				/>
				<img
					src={starTrek}
					className='w-full p-1 lg:w-1/2'
					alt='Picard telling Worf "Sing Worf Sing" from Star Trek: Insurrection'
				/>
			</div>
		</div>
	);
};

export default AboutMeText;
