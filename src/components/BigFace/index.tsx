import { useState, useEffect } from 'react';
import Faces from '../../assets/Faces';

const BigFace = () => {
	const [currFaceIndex, setCurrFaceIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrFaceIndex(currFaceIndex => {
				const faceIndex =
					currFaceIndex === Faces.length - 1 ? 0 : currFaceIndex + 1;
				return faceIndex;
			});
		}, 1500);

		return () => clearInterval(interval);
	}, []);

	return (
		<img
			className='md:bg-clip-circle md:circle-clip absolute -bottom-28 -right-20 min-w-full-plus-5rem sm:-bottom-20 md:-bottom-32 md:-right-10 md:w-2/3 md:min-w-0'
			alt='Bailee Dastugue; woman with brown hair smiling behind a computer.'
			src={Faces[currFaceIndex]}
		/>
	);
};

export default BigFace;
