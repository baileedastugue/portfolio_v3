import { useState } from 'react';
import AboutMeText from './AboutMeText';
import PageTitle from '../../components/PageTitle';
import PersonalityTests from './PersonalityTests';
import TabbedContent from '../../components/TabbedContent';

const About = () => {
	const aboutVersions = {
		'In words': <AboutMeText />,
		'In office horoscope': <PersonalityTests />,
	};
	const [selectedVersion, setSelectedVersion] = useState('In words');

	return (
		<>
			<PageTitle title='About me' />
			<div className='md:text-lg lg:px-28'>
				<TabbedContent
					tabs={aboutVersions}
					selectedTab={selectedVersion}
					handleTabChange={e => {
						setSelectedVersion((e.target as HTMLButtonElement).name);
					}}
				/>
			</div>
		</>
	);
};

export default About;
