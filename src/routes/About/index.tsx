import { useState } from 'react';
import PageTitle from '../../components/PageTitle';
import TabbedContent from '../../components/TabbedContent';

const About = () => {
	const aboutVersions = {
		'In words': 'Something to write here',
		'With visuals': 'Something EVEN MORE to write here',
	};
	const [selectedVersion, setSelectedVersion] = useState('In words');

	return (
		<>
			<PageTitle title='About me' />
			<TabbedContent
				tabs={aboutVersions}
				selectedTab={selectedVersion}
				handleTabChange={e => {
					setSelectedVersion((e.target as HTMLButtonElement).name);
				}}
			/>
		</>
	);
};

export default About;
