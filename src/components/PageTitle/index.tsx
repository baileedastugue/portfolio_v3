interface PageTitleProps {
	title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
	return (
		<h1 className='font-sans text-5xl text-purple-dark xl:text-8xl dark:text-light'>
			{title}
		</h1>
	);
};

export default PageTitle;
