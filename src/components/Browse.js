import { useSelector } from 'react-redux';
import useAiringToday from '../hooks/useAiringToday';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import usePopularTV from '../hooks/usePopularTV';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpomingMovies();
  useAiringToday();
  usePopularTV();
  return (
    
      <div className=' '>
      <Header/>
      {
        showGptSearch ? <GptSearch /> :<div><MainContainer />
        <SecondaryContainer /></div>
      }
      
      
      {/*
        MainContainer
         -video-background
         -videotitle
        secondary container
         - MoviesList *N
          -MoviesCard*N
      */

      }
    </div>
  )
}

export default Browse
