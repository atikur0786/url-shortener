import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface UrlState {
  urlShortenerList: string[]; // assuming it's a list of shortened URLs
}

const initialState: UrlState = {
  urlShortenerList: [],
};

// Create the slice
export const urlShortenerList = createSlice({
  name: "url",
  initialState,
  reducers: {
    // Define the action with the correct type
    setUrlShortenerList: (state, action: PayloadAction<string[]>) => {
      state.urlShortenerList = action.payload; // Set the list of shortened URLs
    },
  },
});

// Export the actions and the reducer
export const { setUrlShortenerList } = urlShortenerList.actions;
export default urlShortenerList.reducer;
