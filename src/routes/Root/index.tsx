import { Outlet, Link, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';

const Root = () => {
	const { pathname } = useLocation();
	const theme = pathname === '/' || pathname === '/landing' ? 'dark' : 'light';
	return (
		<div className={theme}>
			<Layout>
				<nav>
					<ul>
						<li>
							<Link to='/'>Landing</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/resume'>My resume</Link>
						</li>
						<li>
							<Link to='/work'>My work</Link>
						</li>
					</ul>
				</nav>
				<Outlet />
			</Layout>
		</div>
	);
};

export default Root;
