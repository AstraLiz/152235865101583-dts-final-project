import React, {  useState, useEffect } from "react";
import news from "../App/axios";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Pagination, Navigation, Autoplay } from "swiper";


import { Link } from "react-router-dom";
import NewsItem from "./NewsItem";

export default function SliderItem({ type }) {
  const [berita, setBerita] = useState([]);
  useEffect(() => {
    const fetchDataBerita = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariNews = await news.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          // `${"/top-headlines?country=id&category=" + type}`
          `/api/${type}`
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setBerita(responseDariNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBerita();
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
        
        {berita?.slice(-5)?.map((berita) => {
          return (
            <SwiperSlide key={berita.key}>
              <NewsItem berita={berita}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}