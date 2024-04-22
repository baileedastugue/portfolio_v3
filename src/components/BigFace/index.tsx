import { useState, useEffect, useRef } from 'react';
import Faces from '../../assets/Faces';
import Pause from '../../assets/svgs/Pause';
import Play from '../../assets/svgs/Play';

const BigFace = () => {
	const [currFaceIndex, setCurrFaceIndex] = useState(0);
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

	return (
		<div className='absolute -bottom-28 -right-20 min-w-full-plus-5rem sm:-bottom-20 md:-bottom-32 '>
			<button
				onClick={() => {
					setIsPlaying(curr => !curr);
				}}
				className='absolute left-4 top-32 z-30 w-8 text-white'
			>
				{isPlaying ? <Pause /> : <Play />}
			</button>
			<img
				className='md:bg-clip-circle md:circle-clip md:-right-10 md:w-2/3 md:min-w-0 '
				alt='Bailee Dastugue; woman with brown hair smiling behind a computer.'
				src={Faces[currFaceIndex]}
			/>
		</div>
	);
};

export default BigFace;
