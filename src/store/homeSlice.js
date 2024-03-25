// import create slice using redux toolkit

import { createSlice } from "@reduxjs/toolkit";
// create slice ka ek instance create kiya and we exported it and give it name home
export const homeSlice = createSlice({
    name: "home",
    //   yahi pr hum object ka state define kr denge
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {

       // creating 2 method ie.
    // getApi - it contain state and action
    // getGenre- state, action

    // like we call api configuration ke, toh ye url lega aur action dega
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;

