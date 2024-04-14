import theme from '../../../tailwind.config';
import BD from '../../assets/BD';

interface LogoProps {
	darkLightTheme: 'dark' | 'light';
}

const Logo = ({ darkLightTheme }: LogoProps) => {
	const bdFill = darkLightTheme === 'dark' ? 'light' : 'dark';
	return (
		<div className='absolute right-4 top-4 z-10 md:hidden'>
			<BD fill={theme.theme.colors[bdFill]} />
		</div>
	);
};

export default Logo;
