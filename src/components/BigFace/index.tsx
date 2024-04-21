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
			className='sm:full-width-plus-5 absolute -bottom-28 -right-20 min-w-full sm:-bottom-20 md:-right-2'
			alt='Bailee Dastugue; woman with brown hair smiling behind a computer.'
			src={Faces[currFaceIndex]}
		/>
	);
};

export default BigFace;
