import ClickHandlerLink from '../../ClickHandlerLink';

interface NavMenuProps {
	children: string;
	closeMenu: () => void;
	isActive: boolean;
	to: string;
}

const NavMenu = ({ closeMenu, isActive, ...props }: NavMenuProps) => {
	return (
		<ClickHandlerLink
			{...props}
			onClick={closeMenu}
			className={`text-4xl leading-normal transition ${isActive ? 'text-light dark:text-purple' : 'text-dark hover:underline'}`}
		/>
	);
};

export default NavMenu;
