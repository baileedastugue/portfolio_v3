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
		<div className='relative h-dvh overflow-clip bg-light dark:bg-purple'>
			<DisplayText bottomLeftText='Bailee' topRightText='Dastugue' />
			{location.pathname === '/' && <BigFace />}
			<div className='relative h-dvh overflow-auto px-6 pb-6 pt-16 md:z-20 md:pl-32 md:pr-36 md:pt-12 lg:px-28'>
				{children}
			</div>
		</div>
	);
};

export default Layout;
