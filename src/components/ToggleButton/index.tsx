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
		<div>
			{values.map(value => {
				const isSelected = activeSelection === value;
				return (
					<button
						aria-selected={isSelected}
						name={value}
						key={value}
						onClick={e => handleClick(e)}
						className={
							'border-y-2 border-orange p-2 font-serif text-base font-bold text-dark transition first:rounded-l-full first:border-x-2 last:rounded-r-full last:border-x-2 hover:cursor-pointer hover:bg-yellow aria-selected:bg-orange'
						}
					>
						{value}
					</button>
				);
			})}
		</div>
	);
};

export default ToggleButton;
