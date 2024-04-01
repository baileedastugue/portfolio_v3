export interface DisplayTextProps {
	text: string;
}

export const DisplayText = ({ text = '' }: DisplayTextProps) => {
	return (
		<div className='relative h-screen w-screen overflow-hidden bg-orange font-focus'>
			<p className='tracking-display absolute bottom-0 left-0 origin-bottom-left -translate-y-4 translate-x-32 -rotate-90 transform font-focus text-9xl font-black text-purple'>
				{text}
			</p>
		</div>
	);
};
