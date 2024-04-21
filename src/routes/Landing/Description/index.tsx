import GradientText from './GradientText';
import Squiggle from './Squiggle';

const Description = () => {
	return (
		<p className='relative z-20 font-serif text-3xl leading-snug text-light sm:text-4xl sm:leading-normal md:text-5xl md:leading-normal'>
			Hi! I&apos;m Bailee - <br />a <GradientText>front-end</GradientText>{' '}
			loving, <br />
			product-minded, <br />
			user-obsessed
			<br />{' '}
			<span className='relative '>
				software engineer
				<Squiggle />
			</span>{' '}
			<span className='sm:block'>based in Austin, Texas.</span>
		</p>
	);
};

export default Description;
