import Squiggle from './Squiggle';

const Description = () => {
	return (
		<p className='relative z-20 ml-4 pt-12 font-serif text-4xl leading-snug text-light'>
			Hi! I&apos;m Bailee - <br />
			a front-end loving, <br />
			product-minded, <br />
			user-obsessed
			<br />{' '}
			<span className='relative '>
				software engineer.
				<Squiggle />
			</span>
		</p>
	);
};

export default Description;
