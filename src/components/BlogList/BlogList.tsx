import { BlogListItem } from "../BlogListItem/BlogListItem";
import { memo } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { addToFavorite } from "../../store/features/favoritesSlice/favoritesSlice";
import { BlogItemApi } from "../../types";
import { StyledBlogList } from "./styles";

interface BlogListProps {
  list: BlogItemApi[];
}

export const BlogList = memo(({ list }: BlogListProps) => {
  const dispatch = useAppDispatch();

  const handleAddToFavorites = (article: BlogItemApi) => {
    dispatch(addToFavorite(article));
  };

  return (
    <StyledBlogList>
      {Array.isArray(list) &&
        list.map((blogItem) => (
          <BlogListItem
            blogItem={blogItem}
            key={blogItem.id}
            onClick={handleAddToFavorites}
            list={list}
          />
        ))}
    </StyledBlogList>
  );
});
