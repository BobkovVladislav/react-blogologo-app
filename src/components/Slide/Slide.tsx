import {
  ImageWrapper,
  InfoWrapper,
  PublishDate,
  Title,
} from "../BlogListItem/styles";
import { format } from "fecha";
import { memo } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/routes";
import { BlogItemApi } from "../../types";
import { setNotFoundImg } from "../../utils/setNotFoundImg";
import { Image, StyledSlide } from "./styles";

interface SlideProps {
  blogItem: BlogItemApi;
}

export const Slide = memo(({ blogItem }: SlideProps) => {
  const { id, title, imageUrl, publishedAt } = blogItem;
  const navigate = useNavigate();

  const handlePassProps = () => {
    navigate(generatePath(ROUTE.HOME + ROUTE.CONTENT, { id: id }), {
      state: {
        item: blogItem,
      },
    });
  };

  const printDate = format(new Date(publishedAt), "MMMM D, YYYY");

  return (
    <StyledSlide onClick={handlePassProps}>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} onError={setNotFoundImg} />
      </ImageWrapper>
      <InfoWrapper>
        <PublishDate>{printDate}</PublishDate>
        <Title>{title.length > 70 ? title.slice(0, 70) + "..." : title}</Title>
      </InfoWrapper>
    </StyledSlide>
  );
});
