import { useState } from 'react';
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='absolute left-8 top-6 z-40'>
				<NavIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			</div>
			<NavMenu isOpen={isOpen} />
		</>
	);
};

export default Nav;
