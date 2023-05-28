import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "./features/blogsSlice/blogsSlice";
import favoritesReducer from "../store/features/favoritesSlice/favoritesSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
