import React from 'react'
import { IMG_CDN } from '../utils/URL'

const MovieCard = ({posterPath}) => {
    
  return (
    <div className='w-48 pr-4 '>
      <div className='w-48 pr-4 hover:z-30'>

      <img className='transition-all duration-500 rounded-md hover:cursor-pointer hover:scale-150 hover:z-30' alt='poster' src={IMG_CDN+posterPath}></img>
      </div>
    </div>
  )
}

export default MovieCard
