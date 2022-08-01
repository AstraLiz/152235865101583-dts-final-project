import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import news from "../App/axios";
import NewsItem from "../Component/NewsItem";
export default function CardContent() {
  const [berita, setBerita] = useState([]);
  useEffect(() => {
    const fetchDataBerita = async () => {
      try {
        // Gunakan instance tmdb di sini
        const responseDariNews = await news.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          // `${"/top-headlines?country=id&category=" + type}`
          "/api/games"
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setBerita(responseDariNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBerita();
  });
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        
        {berita.map((berita, index) => {
          return (
            <Box key={index} sx={{padding:'1em', margin:'auto'}}>
              <NewsItem berita={berita} />
            </Box>
          );
        })}
      </Box>
    </div>
  );
}