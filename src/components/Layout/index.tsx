import { ReactNode } from 'react';
import DisplayText from '../DisplayText';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='relative h-full overflow-clip bg-light dark:bg-purple'>
			<DisplayText bottomLeftText='Bailee' topRightText='Dastugue' />
			<div className='h-full px-6 pt-16 md:px-28 md:pt-12'>{children}</div>
		</div>
	);
};

export default Layout;
