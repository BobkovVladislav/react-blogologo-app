import { FreeMode } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { getAllArticles } from "../../store/selectors/blogsSelector";
import { useAppSelector } from "../../store/hooks/hooks";
import { StyledSwiper } from "./styles";
import { Slide } from "../Slide/Slide";
import { BlogItemApi } from "../../types";

interface SliderProps {
  blogItem: BlogItemApi;
}

export const Slider = ({ blogItem }: SliderProps) => {
  const { news } = useAppSelector(getAllArticles);

  return (
    <StyledSwiper
      slidesPerView="auto"
      spaceBetween={30}
      centeredSlides={false}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode]}
      className="my-swiper"
    >
      {Array.isArray(blogItem)
        ? blogItem.map((blogItem) => {
            return (
              <SwiperSlide key={blogItem.id} style={{ maxWidth: 300 }}>
                <Slide blogItem={blogItem} />
              </SwiperSlide>
            );
          })
        : news.map((blogItem) => {
            return (
              <SwiperSlide key={blogItem.id} style={{ maxWidth: 300 }}>
                <Slide blogItem={blogItem} />
              </SwiperSlide>
            );
          })}
    </StyledSwiper>
  );
};
