import BigFace from './BigFace';
import Description from './Description';
import QuickLinks from './QuickLinks';

const Landing = () => {
	return (
		<div className='-mt-12 ml-4 flex h-full flex-col justify-between sm:mt-0 md:ml-16'>
			<Description />
			<QuickLinks />
			<BigFace />
		</div>
	);
};

export default Landing;
