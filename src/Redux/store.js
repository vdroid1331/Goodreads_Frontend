import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice";
import bookSliceReducer from "./Slices/BookSlice";

export default configureStore({
  reducer: {
    auth: authSliceReducer,
    book: bookSliceReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
