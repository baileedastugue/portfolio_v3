import GradientText from '../../Landing/Description/GradientText';
import Circle, { InsightColor } from './Circle';

const PersonalityTests = () => {
	const insightsOrder: InsightColor[] = ['blue', 'red', 'green', 'yellow'];

	const list = [
		{
			header: 'Myers-Briggs Type Indicator',
			body: (
				<GradientText classNames='flex justify-around font-sans text-8xl mx-10 md:justify-center gap-8 xl:mx-48'>
					<div>I</div>
					<div>N</div>
					<div>T</div>
					<div>P</div>
				</GradientText>
			),
		},
		{
			header: 'CliftonStrengths Assessment',
			body: (
				<ol className='ml-10 list-decimal text-lg font-semibold'>
					<li className='text-green-700'>Learner</li>
					<li className='text-orange'>Command</li>
					<li className='text-purple'>Achiever</li>
					<li className='text-purple'>Restorative</li>
					<li className='text-green-700'>Strategic</li>
				</ol>
			),
		},
		{
			header: 'Insights Discovery',
			body: (
				<div className='flex justify-center gap-2 md:mx-20 md:gap-8 xl:mx-32'>
					{insightsOrder.map((color, index) => (
						<Circle key={index} color={color} />
					))}
				</div>
			),
		},
	];

	return list.map(test => (
		<div key={test.header} className='mt-4 md:mt-6'>
			<h2 className='pb-2 text-lg font-black md:text-2xl'>{test.header}</h2>
			{test.body}
		</div>
	));
};

export default PersonalityTests;
