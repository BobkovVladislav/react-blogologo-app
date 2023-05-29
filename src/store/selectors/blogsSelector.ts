import { RootState } from "../store";

export const getAllArticles = (state: RootState) => state.blogs;
