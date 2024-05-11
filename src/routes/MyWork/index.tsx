import PageTitle from '../../components/PageTitle';
import underBunstruction from '../../assets/underBunstruction.png';

const MyWork = () => {
	return (
		<div>
			<PageTitle title='My work' />
			<div className='mt-4 flex flex-col items-center justify-center text-center'>
				<img
					src={underBunstruction}
					className='mx-auto max-h-96'
					alt='Brown tabby cat photo with an orange-and-white construction cone cartoon over her left ear'
				/>
				<p className='mt-4 font-serif text-xl font-bold md:max-w-96'>
					Under construction, please pardon our dust and check back soon!
				</p>
			</div>
		</div>
	);
};

export default MyWork;
