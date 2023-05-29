import { memo } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/routes";
import { getFavotites } from "../../store/selectors/favoritesSelector";
import { getUserInfo } from "../../store/selectors/userSelector";
import { useAppSelector } from "../../store/hooks/hooks";
import { setNotFoundImg } from "../../utils/setNotFoundImg";
import {
  StyledArticleListItem,
  Image,
  Title,
  PublishDate,
  FavoritesBtn,
  ImageWrapper,
  InfoWrapper,
  CardWrapper,
} from "./styles";
import { BlogItemApi } from "../../types";

interface BlogListItemProps {
  blogItem: BlogItemApi;
  onClick: (blogItem: BlogItemApi) => void;
  isFavorite?: boolean;
  list: BlogItemApi[];
}

export const BlogListItem = memo(
  ({ blogItem, onClick, isFavorite, list }: BlogListItemProps) => {
    const { imageUrl, publishedAt, title, id } = blogItem;
    const { results } = useAppSelector(getFavotites);
    const { isAuth } = useAppSelector(getUserInfo);
    const navigate = useNavigate();

    const isInFavorites = results
      .map((favorite) => favorite.id)
      .some((favorite) => favorite === id);

    const handleChangeFavorites = () => {
      onClick(blogItem);
    };

    const handlePassProps = () => {
      navigate(generatePath(ROUTE.HOME + ROUTE.CONTENT, { id: id }), {
        state: {
          item: blogItem,
          items: list,
        },
      });
    };

    return (
      <StyledArticleListItem
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        whileHover={{ scale: 1.07 }}
      >
        <CardWrapper onClick={handlePassProps}>
          <ImageWrapper>
            <Image src={imageUrl} alt={title} onError={setNotFoundImg} />
          </ImageWrapper>
          <InfoWrapper>
            <Title>
              {title.length > 70 ? title.slice(0, 70) + "..." : title}
            </Title>
          </InfoWrapper>
        </CardWrapper>
        {isAuth ? (
          <FavoritesBtn onClick={handleChangeFavorites}>
            {isAuth && isInFavorites ? "❤️" : "🤍"}
          </FavoritesBtn>
        ) : (
          <FavoritesBtn></FavoritesBtn>
        )}
      </StyledArticleListItem>
    );
  }
);
