import { FocusEvent, useState } from 'react';
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [hasBeenOpened, setHasBeenOpened] = useState(false);

	const toggleNav = () => {
		setHasBeenOpened(true);
		setIsOpen(!isOpen);
	};

	const handleBlur = (event: FocusEvent) => {
		if (!event.currentTarget.contains(event.relatedTarget)) {
			setIsOpen(false);
		}
	};

	return (
		<div onBlur={handleBlur}>
			<div className='absolute left-4 top-4 z-40 md:left-8 md:top-6'>
				<NavIcon
					isOpen={isOpen}
					onClick={toggleNav}
					hasBeenOpened={hasBeenOpened}
				/>
			</div>
			<NavMenu isOpen={isOpen} closeMenu={toggleNav} />
		</div>
	);
};

export default Nav;
