import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavMenuProps {
	children?: ReactNode;
	isOpen: boolean;
}

const NavMenu = ({ children, isOpen }: NavMenuProps) => {
	const items = [
		{
			to: '/',
			title: 'Landing',
		},
		{
			to: '/about',
			title: 'About',
		},
		{
			to: '/resume',
			title: 'My resume',
		},
		{
			to: '/work',
			title: 'My work',
		},
		{
			to: '/connect',
			// eslint-disable-next-line quotes
			title: "Let's connect",
		},
	];

	return (
		<div
			className={`absolute left-6 top-6 z-30  p-3 ${isOpen && 'flex w-fit flex-col gap-4 rounded-card bg-light shadow-xs shadow-dark'}`}
		>
			{children}
			{isOpen && (
				<nav>
					<ul className='flex flex-col gap-3'>
						{items.map(item => (
							<li key={item.title}>
								<StyledNavLink to={item.to}>{item.title}</StyledNavLink>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

interface StyledNavLinkProps {
	to: string;
	children: string;
}

const StyledNavLink = (props: StyledNavLinkProps) => {
	return (
		<Link
			{...props}
			className='text-4xl leading-normal text-dark hover:text-purple'
		/>
	);
};

export default NavMenu;
