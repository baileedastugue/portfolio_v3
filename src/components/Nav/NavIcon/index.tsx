interface NavIconProps {
	handleOnClick: () => void;
	isOpen: boolean;
}

const NavIcon = ({ isOpen = false, handleOnClick }: NavIconProps) => {
	const generalClasses = isOpen
		? 'h-1 rounded-full'
		: 'shadow-xs rounded-full shadow-dark h-1';
	const topBarClasses = isOpen
		? 'transform rotate-45 origin-top-left w-10 -translate-y-2/4 translate-x-px'
		: 'w-12';
	const bottomBarClasses = isOpen
		? 'transform -rotate-45 w-10 origin-top-left translate-y-2/4 -translate-x-px'
		: 'w-8';
	const color = isOpen
		? 'bg-purple dark:bg-yellow'
		: 'bg-purple dark:bg-yellow';
	return (
		<>
			<button
				className={`border-rose-600 my-3 flex min-h-[28.28px] min-w-[28.28px] flex-col ${isOpen ? 'justify-between' : 'gap-3'}`}
				onClick={handleOnClick}
			>
				<div className={`${generalClasses} ${topBarClasses} ${color} `} />
				<div className={`${generalClasses} ${bottomBarClasses} ${color}`} />
			</button>
		</>
	);
};

export default NavIcon;
