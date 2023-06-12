import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BlogItemApi } from "types";

interface FavoritesState {
  results: BlogItemApi[];
}

const initialState: FavoritesState = {
  results: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<BlogItemApi>) => {
      const favoriteUnit = state.results.find((favorive) => favorive.id === payload.id);
      !favoriteUnit && state.results.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
    removeFromFavorites: (state, { payload }: PayloadAction<BlogItemApi>) => {
      state.results = state.results.filter((result) => result.id !== payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.results));
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorite, removeFromFavorites } = favoritesSlice.actions;
