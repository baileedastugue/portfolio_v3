import { useRef, ReactNode } from 'react';

interface PathProps {
	d: string;
	children: ReactNode;
}

const Path = (props: PathProps) => (
	<path fill='transparent' strokeWidth='4' strokeLinecap='round' {...props} />
);

interface NavIconProps {
	onClick: () => void;
	isOpen: boolean;
}

const NavIcon = ({ isOpen, onClick }: NavIconProps) => {
	const topFromClosedToOpen = useRef<SVGAnimationElement>(null);
	const bottomFromClosedToOpen = useRef<SVGAnimationElement>(null);
	const topFromOpenToClosed = useRef<SVGAnimationElement>(null);
	const bottomFromOpenToClosed = useRef<SVGAnimationElement>(null);

	const duration = '350ms';

	const handleOnClick = () => {
		if (isOpen) {
			topFromOpenToClosed.current?.beginElement();
			bottomFromOpenToClosed.current?.beginElement();
		} else {
			topFromClosedToOpen.current?.beginElement();
			bottomFromClosedToOpen.current?.beginElement();
		}
		onClick();
	};

	return (
		<button onClick={handleOnClick} className='group w-min'>
			<svg
				width='54'
				height='32'
				viewBox='0 0 54 32'
				className={`stroke-purple group-hover:stroke-orange ${!isOpen && 'dark:stroke-yellow'}`}
			>
				<Path d='M6 2 L 54 2'>
					<animate
						attributeName='d'
						from='M6 2 L 54 2'
						to='M6 2 L 34 30'
						dur={duration}
						begin='indefinite'
						fill='freeze'
						ref={topFromClosedToOpen}
					/>
					<animate
						attributeName='d'
						from='M6 2 L 34 30'
						to='M6 2 L 54 2'
						dur={duration}
						begin='indefinite'
						fill='freeze'
						ref={topFromOpenToClosed}
					/>
				</Path>
				<Path d='M 6 14 L 34 14'>
					<animate
						attributeName='d'
						from='M 6 14 L 34 14'
						to='M 6 30 L 34 2'
						dur={duration}
						begin='indefinite'
						fill='freeze'
						ref={bottomFromClosedToOpen}
					/>
					<animate
						attributeName='d'
						from='M 6 30 L 34 2'
						to='M 6 14 L 34 14'
						dur={duration}
						begin='indefinite'
						fill='freeze'
						ref={bottomFromOpenToClosed}
					/>
				</Path>
			</svg>
		</button>
	);
};

export default NavIcon;
