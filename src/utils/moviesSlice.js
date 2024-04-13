import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addPopularTV:(state,action)=>{
            state.popularTV=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addVideoTrailer:(state,action)=>{
            state.addVideoTrailer=action.payload;
        },
        addAiringToday:(state,action)=>{
            state.airingToday=action.payload;
        },
    },
});
export const {addNowPlayingMovies,addVideoTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addAiringToday,addPopularTV}=moviesSlice.actions;
export default moviesSlice.reducer;