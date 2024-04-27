import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';
import './index.css';
import Root from './routes/Root/index.tsx';
import About from './routes/About/index.tsx';
import MyResume from './routes/MyResume/index.tsx';
import MyWork from './routes/MyWork/index.tsx';
import ErrorPage from './routes/ErrorPage/index.tsx';
import Landing from './routes/Landing/index.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Landing />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/resume',
				element: <MyResume />,
			},
			{
				path: '/work',
				element: <MyWork />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
