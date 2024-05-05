import { MouseEvent } from 'react';
import ToggleButton from '../ToggleButton';

interface Map {
	[key: string]: string | undefined;
}

interface TabbedContentProps {
	tabs: Map;
	selectedTab: string;
	handleTabChange: (event: MouseEvent) => void;
}

const TabbedContent = ({
	tabs,
	selectedTab,
	handleTabChange,
}: TabbedContentProps) => {
	return (
		<>
			<div className='my-4 flex justify-center'>
				<ToggleButton
					values={Object.keys(tabs)}
					handleClick={e => handleTabChange(e)}
					activeSelection={selectedTab}
				/>
			</div>
			<p className='font-serif text-dark'>{tabs[selectedTab]}</p>
		</>
	);
};

export default TabbedContent;
