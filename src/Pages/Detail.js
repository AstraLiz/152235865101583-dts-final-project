import React from "react";
import News from "../App/news";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Container/Navbar";
import {
  Typography,
} from "@mui/material";
import Footer from "../Component/Footer";
import NewsCard from "../Component/NewsCard";

export default function Detail() {
  let params = useParams();
  const NewsID = params.NewsID;
  const NewsID2 = params.NewsID2;
  const NewsID3 = params.NewsID3;
  const NewsID4 = params.NewsID4;
  const [news, setNews] = useState([]);
  var rows = [];
  for (var i = 1; i < 13; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Typography variant="subtile2"></Typography>);
  }

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const responseFromNews = await News.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          `/api/detail/${NewsID}/${NewsID2}/${NewsID3}/${NewsID4}`
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setNews(responseFromNews.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNewsData()}, [NewsID, NewsID2, NewsID3, NewsID4]);

  return (
    <>
    <Navbar/>
      <NewsCard news={news} />
        <Footer/>
    </>
  );
}