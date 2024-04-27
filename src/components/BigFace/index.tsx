import { useState, useEffect, useRef } from 'react';
import Faces from '../../assets/Faces';
import Pause from '../../assets/svgs/Pause';
import Play from '../../assets/svgs/Play';
import FacePaths from '../../assets/svgs/FacePaths';

const aspectRatios = [
	'aspect-53/60',
	'aspect-62/75',
	'aspect-95/100',
	'aspect-89/100',
	'aspect-93/100',
	'aspect-89/100',
	'aspect-47/50',
];

const BigFace = () => {
	const [currFaceIndex, setCurrFaceIndex] = useState(5);
	const [isPlaying, setIsPlaying] = useState(true);

	const intervalId = useRef(0);

	useEffect(() => {
		intervalId.current = setInterval(() => {
			if (isPlaying) {
				setCurrFaceIndex(currFaceIndex => {
					const faceIndex =
						currFaceIndex === Faces.length - 1 ? 0 : currFaceIndex + 1;
					return faceIndex;
				});
			} else {
				return () => clearInterval(intervalId.current);
			}
		}, 1500);
		return () => clearInterval(intervalId.current);
	}, [isPlaying]);

	const toggleAnimation = () => {
		setIsPlaying(curr => !curr);
	};

	return (
		<div className='absolute -bottom-10 w-full md:-bottom-14 md:right-0 md:z-20 md:w-7/12'>
			<svg className='h-0 w-0 '>
				<clipPath id='drop-clip-path' clipPathUnits='objectBoundingBox'>
					<path d={FacePaths[currFaceIndex]} />
				</clipPath>
			</svg>
			<button
				onClick={toggleAnimation}
				className='absolute bottom-14 right-4 z-30 w-8 text-white md:bottom-20'
			>
				{isPlaying ? <Pause /> : <Play />}
			</button>
			<div
				onClick={toggleAnimation}
				className={`z-30 w-full bg-contain bg-center bg-no-repeat hover:bg-light ${aspectRatios[currFaceIndex]}`}
				style={{
					backgroundImage: `url('${Faces[currFaceIndex]}'`,
					clipPath: 'url(#drop-clip-path)',
				}}
			/>
		</div>
	);
};

export default BigFace;
