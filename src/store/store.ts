import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice/userSlice";
import themeReducer from "./features/themeSlice/themeSlice";
import blogsSlice from "./features/blogsSlice/blogsSlice";
import singleArticleReducer from "./features/singleBlogItemSlice/singleBlogItemSlice";
import favoritesReducer from "../store/features/favoritesSlice/favoritesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    blogs: blogsSlice,
    singleBlog: singleArticleReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
