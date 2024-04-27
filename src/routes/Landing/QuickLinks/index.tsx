import { navItems } from '../../../components/Nav/NavMenu';
import ClickHandlerLink from '../../../components/ClickHandlerLink';
import { useMatch, useResolvedPath } from 'react-router-dom';

const QuickLinks = () => {
	return (
		<ul className='mb-4  md:mb-16'>
			{navItems.map(item => {
				const resolved = useResolvedPath(item.to);
				const match = useMatch({ path: resolved.pathname, end: true });
				return (
					!match && (
						<li key={item.title}>
							<ClickHandlerLink
								key={item.title}
								to={item.to}
								className='relative z-10 bg-white/80 px-1 text-2xl leading-snug text-purple-dark backdrop-blur-sm hover:bg-purple-light sm:text-3xl sm:leading-normal lg:bg-transparent lg:text-light'
							>
								{item.title}
							</ClickHandlerLink>
						</li>
					)
				);
			})}
		</ul>
	);
};

export default QuickLinks;
