import { Outlet, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';

const Root = () => {
	const { pathname } = useLocation();
	const theme = pathname === '/' || pathname === '/landing' ? 'dark' : 'light';
	return (
		<div className={`${theme} h-dvh w-screen`}>
			<Nav />
			<Logo darkLightTheme={theme} />
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
};

export default Root;
