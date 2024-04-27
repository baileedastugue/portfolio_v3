import { ReactNode } from 'react';

interface GradientTextProps {
	children: ReactNode;
}

const GradientText = ({ children }: GradientTextProps) => {
	return (
		<span className='bg-radial bg-clip-text text-transparent'>{children}</span>
	);
};

export default GradientText;
