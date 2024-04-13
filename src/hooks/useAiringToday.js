import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/URL";
import { useEffect } from "react";
import {   addAiringToday } from "../utils/moviesSlice";
const useAiringToday=()=>{
    //fetch data from moviess api and update store
  const dispatch = useDispatch();
  const getAiringToday=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addAiringToday(json.results));
 
  }
  useEffect(()=>{
    getAiringToday();
  },[]);
}
export default useAiringToday;