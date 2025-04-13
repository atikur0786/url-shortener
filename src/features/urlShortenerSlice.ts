import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  urlShortenerList: [],
};

export const urlShortenerList = createSlice({
  name: "urlShortenerList",
  initialState,
  reducers: {
    setUrlShortenerList: (state, action) => {
      state.urlShortenerList = action.payload;
    },
    // getUrlShortenerList: (state) => {
    //   return state.urlShortenerList;
    // },
  },
});

export const { setUrlShortenerList } = urlShortenerList.actions;

export default urlShortenerList.reducer;
