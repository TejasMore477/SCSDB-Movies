import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Info:null,
}

export const MovieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        mountMovieInfo: (state,action)=>{
            state.Info = action.payload;
        },
        unMountMovieInfo:( state )=>{
            state.Info = null;
        },
    }
})

export const { mountMovieInfo, unMountMovieInfo } = MovieSlice.actions;
export default MovieSlice.reducer;