import ClickHandlerLink from '../../ClickHandlerLink';

interface NavMenuProps {
	to: string;
	children: string;
	isActive: boolean;
	closeMenu: () => void;
}

const NavMenu = (props: NavMenuProps) => {
	return (
		<ClickHandlerLink
			{...props}
			onClick={props.closeMenu}
			className={`text-4xl leading-normal transition ${props.isActive ? 'text-light dark:text-purple' : 'text-dark hover:underline'}`}
		/>
	);
};

export default NavMenu;
