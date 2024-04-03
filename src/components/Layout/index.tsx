import { ReactNode } from 'react';
import DisplayText from '../DisplayText';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='relative h-screen w-screen bg-light dark:bg-purple'>
			<DisplayText bottomLeftText='Bailee' topRightText='Dastugue' />
			<div className='relative z-10 p-4 text-orange md:mx-32 md:pt-12'>
				{children}
			</div>
		</div>
	);
};

export default Layout;
