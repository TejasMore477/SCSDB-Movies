import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie:[],
}

export const MovieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{
        mountMovieInfo: (state,action)=>{
            state.movie = action.payload;
        },
        unMountMovieInfo:(state, action)=>{
            state.movie = [];
        },
    }
})

export const { mountMovieInfo, unMountMovieInfo } = MovieSlice.actions;
export default MovieSlice.reducer;