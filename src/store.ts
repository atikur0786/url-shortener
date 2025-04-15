import { configureStore } from "@reduxjs/toolkit";
import urlShortenerListReducer from "./features/urlShortenerSlice";

export const store = configureStore({
  reducer: {
    url: urlShortenerListReducer,
  },
});

// Export the RootState and AppDispatch types
export type AppDispatch = typeof store.dispatch;
