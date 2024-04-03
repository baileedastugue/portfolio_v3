import { Outlet, Link } from 'react-router-dom';

const Root = () => {
	return (
		<>
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
		</>
	);
};

export default Root;
