import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return  (
    movies &&
    <div className='  bg-black'>
      <div className='-mt-48 relative z-20 pl-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular TV Shows"} movies={movies.popularTV} />
      <MovieList title={"Airing TV Shows"} movies={movies.airingToday} />
      </div>
      <div></div>
      {/*
      MovieList popular
      Movielist Nowplaying
      movielist trending
      movielist genre

      */

      }
    </div>
  )
}

export default SecondaryContainer
