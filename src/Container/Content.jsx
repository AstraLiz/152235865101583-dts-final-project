import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import News from "../App/news";
import NewsItem from "../Component/NewsItem";



export default function Content() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const responseFromNews = await News.get(
          `/api/games`
        );
        setNews(responseFromNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNewsData();
  });
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        
        {news.map((news, index) => {
          return (
            <Box key={index} sx={{padding:'1em', margin:'auto'}}>
              <NewsItem news={news} />
            </Box>
          );
        })}
      </Box>
    </div>
  );
}