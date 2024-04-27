import Description from './Description';
import QuickLinks from './QuickLinks';

const Landing = () => {
	return (
		<div className='flex h-full flex-col justify-between md:ml-16'>
			<Description />
			<QuickLinks />
		</div>
	);
};

export default Landing;
