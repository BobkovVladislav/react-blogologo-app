import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { BlogItemApi } from "../../types";
import { useAppSelector } from "../../store/hooks/hooks";
import { getUserInfo } from "../../store/selectors/userSelector";
import { getFavotites } from "../../store/selectors/favoritesSelector";
// import { setNotFoundImg } from "utils";
import {
  NavigationLink,
  Title,
  Image,
  Text,
  OuterLink,
  OuterLinkWrapper,
  Wrapper,
  FavoritesButton,
  LinksWrapper,
} from "./styles";

interface BlogItemProps {
  blogItem: BlogItemApi;
  onClick: (blogItem: BlogItemApi) => void;
}

export const BlogContent = memo(({ blogItem, onClick }: BlogItemProps) => {
  const { id, imageUrl, title, summary, url } = blogItem;
  const navigate = useNavigate();
  const { isAuth } = useAppSelector(getUserInfo);
  const { results } = useAppSelector(getFavotites);
  const isInFavorites = results
    .map((favorite) => favorite.id)
    .some((favorite) => favorite === id);

  const handleBackHome = () => {
    navigate(-1);
  };
  const handleChangeFavorites = () => {
    onClick(blogItem);
  };

  return (
    <Wrapper>
      <NavigationLink onClick={handleBackHome}>
        Home <span> / Post {id}</span>
      </NavigationLink>
      <Title>{title}</Title>
      <Image src={imageUrl} alt={title} onError={setNotFoundImg} />
      <Text>{summary}</Text>
      <LinksWrapper>
        <FavoritesButton onClick={handleChangeFavorites}>
          {isAuth && isInFavorites ? "❤️" : "🤍"}
        </FavoritesButton>
        <OuterLinkWrapper>
          <OuterLink href={url} target="_blank">
            Learn more
          </OuterLink>
        </OuterLinkWrapper>
      </LinksWrapper>
    </Wrapper>
  );
});
