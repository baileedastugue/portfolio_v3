import { ReactNode } from 'react';

interface GradientTextProps {
	children: ReactNode;
	classNames?: string;
}

const GradientText = ({ children, classNames }: GradientTextProps) => {
	return (
		<span className={`${classNames} bg-radial bg-clip-text text-transparent`}>
			{children}
		</span>
	);
};

export default GradientText;
