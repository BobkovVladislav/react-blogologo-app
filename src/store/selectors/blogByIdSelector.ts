import { RootState } from "../store";

export const getArticleById = (state: RootState) => state.singleBlog;
