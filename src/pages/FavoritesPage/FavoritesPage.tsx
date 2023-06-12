import { BlogListItem } from "components";
import { ROUTE } from "routes/routes";
import { removeFromFavorites } from "store/features/favoritesSlice/favoritesSlice";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { getFavotites } from "store/selectors/favoritesSelector";
import { BlogItemApi } from "types";
import { FavoritesWrapper, Heading, FavoritesList, NoFavoritesText, StyledLink } from "./styles";

export const FavoritesPage = () => {
  const { results } = useAppSelector(getFavotites);
  const dispatch = useAppDispatch();

  const handleRemoveFromFavorites = (article: BlogItemApi) => {
    dispatch(removeFromFavorites(article));
  };

  return (
    <FavoritesWrapper
      initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <Heading>Favorites</Heading>
      {results.length === 0 && (
        <>
          <NoFavoritesText>
            Add your favorite articles or news items here to get quick access to them at any time.
          </NoFavoritesText>
          <StyledLink to={ROUTE.HOME}>Check!</StyledLink>
        </>
      )}
      <FavoritesList>
        {results !== null &&
          results &&
          results.map((result: BlogItemApi) => {
            return (
              <BlogListItem
                key={result.id}
                blogItem={result}
                onClick={handleRemoveFromFavorites}
                isFavorite
                list={results}
              />
            );
          })}
      </FavoritesList>
    </FavoritesWrapper>
  );
};
