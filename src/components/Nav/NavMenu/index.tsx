import { ReactNode } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';
import NavLink from '../NavLink';

interface NavMenuProps {
	children?: ReactNode;
	isOpen: boolean;
	closeMenu: () => void;
}

export const navItems = [
	{
		to: '/',
		title: 'Home',
		externalLink: false,
	},
	{
		to: '/about',
		title: 'About me',
		externalLink: false,
	},
	{
		to: '/work',
		title: 'My work',
		externalLink: false,
	},
	{
		to: 'https://www.linkedin.com/in/bailee-dastugue/',
		// eslint-disable-next-line quotes
		title: "Let's connect",
		externalLink: true,
	},
];

const NavMenu = ({ children, isOpen, closeMenu }: NavMenuProps) => {
	return (
		<div
			className={`${isOpen ? 'nav-circle-clip' : 'nav-circle-clip-hidden'} absolute left-0 top-0 z-30 w-full bg-purple-light pl-10 pt-12 transition-all duration-300 md:w-[36rem] md:pl-14 md:pt-14 dark:bg-light`}
		>
			{children}
			<nav>
				<ul className='mt-2 flex h-[28rem] flex-col gap-3'>
					{navItems.map(item => {
						const resolved = useResolvedPath(item.to);
						const match = useMatch({ path: resolved.pathname, end: true });
						return (
							<li key={item.title}>
								<NavLink
									closeMenu={closeMenu}
									isActive={!!match}
									to={item.to}
									externalLink={item.externalLink}
								>
									{item.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default NavMenu;
