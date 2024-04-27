import { ReactNode } from 'react';
import DisplayText from '../DisplayText';
import BigFace from '../BigFace';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const location = useLocation();
	return (
		<div className='relative h-full overflow-clip bg-light dark:bg-purple'>
			<DisplayText bottomLeftText='Bailee' topRightText='Dastugue' />
			{location.pathname === '/' && <BigFace />}
			<div className='h-full px-6 pt-16 md:px-28 md:pt-12'>{children}</div>
		</div>
	);
};

export default Layout;
