import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='main'><div className='w-full aspect-video  no-scrollbar pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div className=''>
      <button className=' bg-white  p-4 px-12 mr-2 text-xl text-black  rounded-lg hover:bg-opacity-70'><h1>▷ play</h1></button>
      <button className=' bg-gray-400 bg-opacity-30 text-white p-4 px-12 mx-2 text-xl rounded-lg hover:bg-opacity-20'>More Info</button>
    </div>
  </div></div>
    
  )
}

export default VideoTitle
