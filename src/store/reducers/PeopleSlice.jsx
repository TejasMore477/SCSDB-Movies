import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people:[],
}

export const PeopleSlice = createSlice({
    name:'people',
    initialState,
    reducers:{
        mountPeopleInfo: (state,action)=>{
            state.people = action.payload;
        },
        unMountPeopleInfo:(state, action)=>{
            state.people = [];
        },
    }
})

export const { mountPeopleInfo, unMountPeopleInfo } = PeopleSlice.actions;
export default PeopleSlice.reducer;