import { Outlet, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';

const Root = () => {
	const { pathname } = useLocation();
	const theme = pathname === '/' || pathname === '/landing' ? 'dark' : 'light';
	return (
		<div className={theme}>
			<Layout>
				<Nav />
				<Outlet />
			</Layout>
		</div>
	);
};

export default Root;
