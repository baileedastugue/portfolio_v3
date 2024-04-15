import { navItems } from '../../../components/Nav/NavMenu';
import ClickHandlerLink from '../../../components/ClickHandlerLink';
import { useMatch, useResolvedPath } from 'react-router-dom';

const QuickLinks = () => {
	return (
		<ul className='sm:mb-32'>
			{navItems.map(item => {
				const resolved = useResolvedPath(item.to);
				const match = useMatch({ path: resolved.pathname, end: true });
				return (
					!match && (
						<li>
							<ClickHandlerLink
								key={item.title}
								to={item.to}
								className='relative z-10 text-2xl leading-snug text-light sm:text-3xl sm:leading-normal'
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
