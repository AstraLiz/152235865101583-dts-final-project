import React, {  useState, useEffect } from "react";
import News from "../App/news";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Pagination, Navigation, Autoplay } from "swiper";


import NewsItem from "./NewsItem";

export default function SliderItem({ type }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchDataNews = async () => {
      try {
        const responseFromNews = await news.get(
          `/api/${type}`
        );
        setNews(responseFromNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataNews();
  }, );
  return (
    <>
      <Swiper
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        
        600: {
          slidesPerView: 5,
        },
      }}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        autoplay
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        
        {news?.slice(-6)?.map((news) => {
          return (
            <SwiperSlide key={news.key}>
              <NewsItem news={News}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}