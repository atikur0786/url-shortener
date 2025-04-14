import { configureStore } from "@reduxjs/toolkit";
import urlShortenerListReducer from "./features/urlShortenerSlice";

export const store = configureStore({
  reducer: {
    url: urlShortenerListReducer, // Key the reducer to the 'url' slice
  },
});
