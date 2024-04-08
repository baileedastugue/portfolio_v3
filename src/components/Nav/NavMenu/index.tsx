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
			className={`${isOpen ? 'circle-clip' : 'circle-clip-hidden'} absolute left-0 top-0 z-30 h-[35rem] w-[36rem] bg-purple-light p-16 pl-10 transition-all duration-300`}
		>
			{children}
			<nav>
				<ul className='mt-2 flex h-[28rem] flex-col gap-3'>
					{items.map(item => (
						<li key={item.title}>
							<StyledNavLink to={item.to}>{item.title}</StyledNavLink>
						</li>
					))}
				</ul>
			</nav>
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
			className='text-4xl leading-normal text-dark transition hover:underline'
		/>
	);
};

export default NavMenu;
