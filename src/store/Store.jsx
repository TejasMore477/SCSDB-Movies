import { configureStore } from "@reduxjs/toolkit";
import PeopleReducer  from "./reducers/PeopleSlice";
import MovieReducer  from "./reducers/MovieSlice";
import TvReducer  from "./reducers/TvSlice";

export const Store = configureStore({
    reducer: {
        MovieInfo:MovieReducer,
        TvInfo:TvReducer,
        PeopleInfo:PeopleReducer,
    },
});
