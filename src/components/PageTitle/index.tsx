interface PageTitleProps {
	title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
	return <h1 className='font-sans text-5xl text-light xl:text-9xl'>{title}</h1>;
};

export default PageTitle;
