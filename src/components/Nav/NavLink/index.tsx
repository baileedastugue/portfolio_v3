import ClickHandlerLink from '../../ClickHandlerLink';

interface NavLinkProps {
	children: string;
	closeMenu: () => void;
	isActive: boolean;
	to: string;
	externalLink: boolean;
}

const NavLink = ({ closeMenu, isActive, ...props }: NavLinkProps) => {
	return (
		<ClickHandlerLink
			{...props}
			onClick={closeMenu}
			className={`text-4xl leading-normal transition ${isActive ? 'text-light dark:text-purple' : 'text-dark hover:underline'}`}
		/>
	);
};

export default NavLink;
