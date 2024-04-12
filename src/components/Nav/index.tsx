import { useState } from 'react';
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hasBeenOpened, setHasBeenOpened] = useState(false);

	const toggleNav = () => {
		setHasBeenOpened(true);
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className='absolute left-8 top-6 z-40'>
				<NavIcon
					isOpen={isOpen}
					onClick={toggleNav}
					hasBeenOpened={hasBeenOpened}
				/>
			</div>
			<NavMenu isOpen={isOpen} closeMenu={toggleNav} />
		</>
	);
};

export default Nav;
