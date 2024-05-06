export type InsightColor = 'red' | 'yellow' | 'green' | 'blue';
interface CircleProps {
	color: InsightColor;
}

const Circle = ({ color }: CircleProps) => {
	return (
		<div
			data-color={color}
			className='aspect-square w-[25vw] max-w-[150px] rounded-full data-[color=blue]:bg-blue-700 data-[color=green]:bg-green-700 data-[color=red]:bg-red-700 data-[color=yellow]:bg-yellow'
		/>
	);
};

export default Circle;
