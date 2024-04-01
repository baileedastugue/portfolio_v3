export interface DisplayTextProps {
	bottomLeftText: string;
	topRightText: string;
	textClass?: string; // change to one of type
}

export const DisplayText = ({
	bottomLeftText = '',
	topRightText = '',
	textClass = 'text-dark',
}: DisplayTextProps) => {
	return (
		<div
			className={`relative flex h-screen w-screen ${textClass} hidden md:block`}
		>
			<InnerText text={bottomLeftText} textPosition='bottomLeft' />
			<InnerText text={topRightText} textPosition='topRight' />
		</div>
	);
};

interface InnerTextProps {
	text: string;
	textPosition: 'bottomLeft' | 'topRight';
}

const InnerText = ({ text, textPosition }: InnerTextProps) => {
	const classes = {
		container:
			'tracking-widest absolute transform font-focus text-9xl font-black',
		bottomLeft:
			'bottom-0 left-3 origin-bottom-left -translate-y-4 translate-x-32 -rotate-90',
		topRight:
			'top-0 right-0 origin-top-left rotate-90 translate-x-full translate-y-4 mr-3',
	};
	return (
		<div className={`${classes.container} ${classes[textPosition]}`}>
			<p className='animate-reveal mx-auto'>{text}</p>
		</div>
	);
};
