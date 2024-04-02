import { ReactNode } from 'react';
import DisplayText from '../DisplayText';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	<div className='bg-purple'>
		<DisplayText
			bottomLeftText='Bailee'
			topRightText='Dastugue'
			textClass='text-light'
		/>
		{children}
	</div>;
};

export default Layout;
