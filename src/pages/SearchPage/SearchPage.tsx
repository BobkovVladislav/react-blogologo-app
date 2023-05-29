import { BlogList } from "../../components/BlogList/BlogList";
import { Modal } from "../../components/Modal/Modal";
import { Spinner } from "../../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import {
  fetchArticles,
  fetchNews,
} from "../../store/features/blogsSlice/blogsSlice";
import { getAllArticles } from "../../store/selectors/blogsSelector";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { SearchPageWrapper, SearchResultsInfo } from "./styles";

export const SearchPage = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const {
    searchParams: { searchValue },
  } = useAppSelector(getAllArticles);
  const dispatch = useAppDispatch();
  const { articles, news, error, isLoading } = useAppSelector(getAllArticles);

  const handleCloseModal = () => {
    setIsActiveModal(true);
  };

  useEffect(() => {
    searchValue &&
      dispatch(
        fetchArticles({
          page: 0,
          word: searchValue,
          value: "",
        })
      );
  }, [dispatch, searchValue]);

  useEffect(() => {
    searchValue &&
      dispatch(
        fetchNews({
          page: 0,
          word: searchValue,
          value: "",
        })
      );
  }, [dispatch, searchValue]);

  return (
    <SearchPageWrapper
      initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for Articles
      </SearchResultsInfo>
      {isLoading ? (
        <Spinner />
      ) : error && !isActiveModal ? (
        <Modal message={error} handleClick={handleCloseModal} />
      ) : (
        <BlogList list={articles} />
      )}
      <SearchResultsInfo>
        "{searchValue ? searchValue : " "}" search results for News
      </SearchResultsInfo>
      {isLoading ? (
        <Spinner />
      ) : error && !isActiveModal ? (
        <Modal message={error} handleClick={handleCloseModal} />
      ) : (
        <BlogList list={news} />
      )}
    </SearchPageWrapper>
  );
};
