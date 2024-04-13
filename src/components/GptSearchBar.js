import React, { useRef } from "react";
import { API_OPTIONS, backgroundimage } from "../utils/URL";
import { useSelector } from "react-redux";
import lang from "../utils/languageContants";
import openai from "../utils/openai";
const GptSearchBar = () => {
  const currLang = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);
  // movie aeacrh from tmdb
  const searchMovieTmdb= async (movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json=await data.json();
    return json.results;
  }
  const handleGptSearchClick = async () => {
    console.log('no money i have');
    // const gptQuery =
    //   "Act as a Movie  Recommendation System suggest some movies for the query :" +
    //   SearchText.current.value +
    //   "Only Give me 5 movie names, comma seperated like the example result given ahead . Example Result: Koi mil gaya, Sholay , Gadar, Deadpool, Golmaal ";
    // //make an api call to gpt api to get movie result

    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResult.choices);
    // if(!gptResult.choices){
    //   const errorHandle=()=>{
    //     return "you have exceeded the maximum quota";
    //   }
    // }
  };
  
  
  return (
    <div>
      <img className="absolute" src={backgroundimage} alt="logo" />
      <div className="pt-[8%] flex justify-center ">
        <form
          className="relative z-10 w-1/2 bg-black grid grid-cols-12 rounded-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={SearchText}
            className="rounded-md col-span-9 p-4 m-4"
            type="text"
            placeholder={lang[currLang].gptSearchPlaceholder}
          ></input>
          <button
            onClick={handleGptSearchClick}
            className="col-span-3 m-4 py-2 px-4 bg-red-700 hover:bg-red-500 text-white rounded-lg"
          >
            {lang[currLang].search}
          </button>
          <p className="text-red-500 col-span-12 px-4 my-4">You have Exceeded the maximum quota for Open API requests</p>
        </form>
        
      </div>
    </div>
  );
};

export default GptSearchBar;
