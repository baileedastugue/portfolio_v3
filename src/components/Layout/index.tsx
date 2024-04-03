import { ReactNode } from 'react';
import DisplayText from '../DisplayText';

interface LayoutProps {
	pageTheme: 'dark' | 'light';
	children: ReactNode;
}

const Layout = ({ children, pageTheme = 'dark' }: LayoutProps) => {
	const textColor = pageTheme === 'dark' ? 'text-light' : 'text-dark';
	return (
		<div className='relative h-screen w-screen bg-purple'>
			<DisplayText
				bottomLeftText='Bailee'
				topRightText='Dastugue'
				textClass={textColor}
			/>
			<div className='relative z-10 p-4 text-orange md:mx-32 md:pt-12'>
				{children}
			</div>
		</div>
	);
};

export default Layout;
