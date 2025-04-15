import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShortenedUrl, UrlState } from "../types/store";

const initialState: UrlState = {
  urlShortenerList: [],
};

// Create the slice
export const urlShortenerList = createSlice({
  name: "url",
  initialState,
  reducers: {
    // Define the action with the correct type
    setUrlShortenerList: (state, action: PayloadAction<ShortenedUrl>) => {
      state.urlShortenerList = [...state.urlShortenerList, action.payload];
    },
  },
});

// Export the actions and the reducer
export const { setUrlShortenerList } = urlShortenerList.actions;
export default urlShortenerList.reducer;
