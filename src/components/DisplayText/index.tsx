interface DisplayTextProps {
	bottomLeftText: string;
	topRightText: string;
	textClass?: 'text-dark' | 'text-light';
}

const DisplayText = ({
	bottomLeftText = '',
	topRightText = '',
	textClass = 'text-dark',
}: DisplayTextProps) => {
	return (
		<div
			className={`absolute left-0 top-0 flex h-screen w-screen ${textClass} hidden overflow-hidden md:block`}
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
			'tracking-widest absolute transform font-focus text-9xl font-black leading-tight',
		bottomLeft:
			'bottom-0 left-4 origin-bottom-left -translate-y-4 translate-x-32 -rotate-90',
		topRight:
			'top-0 -right-4 origin-top-left translate-x-full translate-y-4 rotate-90',
	};
	return (
		<div className={`${classes.container} ${classes[textPosition]}`}>
			<p className='animate-reveal mx-auto overflow-hidden'>{text}</p>
		</div>
	);
};

export default DisplayText;
