import { configureStore } from "@reduxjs/toolkit";
import shelfSliceReducer from "Redux/Slices/ShelfSlice";

import authSliceReducer from "./Slices/AuthSlice";
import bookSliceReducer from "./Slices/BookSlice";

export default configureStore({
  reducer: {
    auth: authSliceReducer,
    book: bookSliceReducer,
    shelf: shelfSliceReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
