import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Info:[],
}

export const TvSlice = createSlice({
    name:'tv',
    initialState,
    reducers:{
        mountTvInfo: (state,action)=>{
            state.Info = action.payload;
        },
        unMountTvInfo:(state, action)=>{
            state.Info = [];
        },
    }
})

export const { mountTvInfo, unMountTvInfo } = TvSlice.actions;
export default TvSlice.reducer;