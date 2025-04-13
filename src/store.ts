import { configureStore } from "@reduxjs/toolkit";
import urlShortenerList from "./features/urlShortenerSlice";

export const store = configureStore({
  reducer: urlShortenerList,
});
