import { useState } from 'react';
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<NavMenu isOpen={isOpen}>
			<NavIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
		</NavMenu>
	);
};

export default Nav;
