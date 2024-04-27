import theme from '../../../tailwind.config';
import ClickHandlerLink from '../ClickHandlerLink';
import BD from './BD';

interface LogoProps {
	darkLightTheme: 'dark' | 'light';
}

const Logo = ({ darkLightTheme }: LogoProps) => {
	const bdFill = darkLightTheme === 'dark' ? 'light' : 'dark';
	return (
		<ClickHandlerLink to='/' className='absolute right-4 top-4 z-10 md:hidden'>
			<BD fill={theme.theme.extend.colors[bdFill]} />
		</ClickHandlerLink>
	);
};

export default Logo;
