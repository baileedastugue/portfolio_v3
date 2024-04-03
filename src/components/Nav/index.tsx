import { useState } from 'react';
import NavIcon from './NavIcon';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<NavIcon isOpen={isOpen} handleOnClick={() => setIsOpen(!isOpen)} />
		</>
	);
};

export default Nav;
