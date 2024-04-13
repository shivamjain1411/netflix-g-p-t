import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/URL";
import { useEffect } from "react";
import {   addPopularTV } from "../utils/moviesSlice";
const usePopularTV=()=>{
    //fetch data from moviess api and update store
  const dispatch = useDispatch();
  const getPopularTV=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularTV(json.results));
 
  }
  useEffect(()=>{
    getPopularTV();
  },[]);
}
export default usePopularTV;