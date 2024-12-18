import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tv:[],
}

export const TvSlice = createSlice({
    name:'tv',
    initialState,
    reducers:{
        mountTvInfo: (state,action)=>{
            state.tv = action.payload;
        },
        unMountTvInfo:(state, action)=>{
            state.tv = [];
        },
    }
})

export const { mountTvInfo, unMountTvInfo } = TvSlice.actions;
export default TvSlice.reducer;