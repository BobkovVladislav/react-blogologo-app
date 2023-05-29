import { BlogContent } from "../../components/BlogContent/BlogContent";
import { Modal } from "../../components/Modal/Modal";
import { Spinner } from "../../components/Spinner/Spinner";
import { Slider } from "../../components/Slider/Slider";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { BlogItemApi } from "../../types";
import {
  BlogContentWrapper,
  RecommendationsTitle,
  SliderWrapper,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { addToFavorite } from "../../store/features/favoritesSlice/favoritesSlice";
import { fetchArticles } from "../../store/features/blogsSlice/blogsSlice";
import { getArticleById } from "../../store/selectors/blogByIdSelector";
import { fetchArticleById } from "../../store/features/singleBlogItemSlice/singleBlogItemSlice";

export const BlogPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { id = "" } = useParams();
  const { isLoading, error } = useAppSelector(getArticleById);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleCloseModal = () => {
    setIsActiveModal(true);
  };
  const handleAddToFavorites = (article: BlogItemApi) => {
    dispatch(addToFavorite(article));
  };

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchArticles({ page: 0, value: "", word: "" }));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error && !isActiveModal) {
    return <Modal message={error} handleClick={handleCloseModal} />;
  }

  return (
    <BlogContentWrapper
      initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <BlogContent
        blogItem={location.state.item}
        onClick={handleAddToFavorites}
      />
      <SliderWrapper>
        <RecommendationsTitle>Recommendations</RecommendationsTitle>
        <Slider blogItem={location.state.items} />
      </SliderWrapper>
    </BlogContentWrapper>
  );
};
