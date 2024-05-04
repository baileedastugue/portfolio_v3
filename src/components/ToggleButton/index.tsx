import { MouseEvent } from 'react';

export interface ToggleButtonProps {
	activeSelection?: string;
	handleClick: (event: MouseEvent) => void;
	values: string[];
}

const ToggleButton = ({
	values,
	handleClick,
	activeSelection = values[0],
}: ToggleButtonProps) => {
	return (
		<>
			{values.map((value, index) => {
				return (
					<button
						aria-selected={activeSelection === value}
						name={value}
						key={value}
						onClick={e => handleClick(e)}
						className={`border-y-2 border-orange p-2 font-serif text-base font-bold transition last:rounded-r-full last:border-x-2 hover:cursor-pointer hover:bg-yellow aria-selected:bg-orange ${index === 0 && 'rounded-l-full border-x-2'}`}
					>
						{value}
					</button>
				);
			})}
		</>
	);
};

export default ToggleButton;
