import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  //fetch the trailorvideo and updating the store with triler video data from usemovietrailer slice
  
  
 
  const trailerVideo = useSelector((store) => store.movies?.addVideoTrailer);
  useMovieTrailer({movieId});
  
  return (
    <div className="w-full ">
      <iframe className="w-full aspect-video no-scrollbar"
        
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&vq=hd1080&mute=1&loop=1&control=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
