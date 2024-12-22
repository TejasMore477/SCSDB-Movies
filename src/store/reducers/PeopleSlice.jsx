import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Info:[],
}

export const PeopleSlice = createSlice({
    name:'people',
    initialState,
    reducers:{
        mountPeopleInfo: (state,action)=>{
            state.Info = action.payload;
        },
        unMountPeopleInfo:(state, action)=>{
            state.Info = [];
        },
    }
})

export const { mountPeopleInfo, unMountPeopleInfo } = PeopleSlice.actions;
export default PeopleSlice.reducer;