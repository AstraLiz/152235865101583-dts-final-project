import React from "react";
import axios from "axios";
import news from "../App/axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Container/Navbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import Footer from "../Component/Footer";
import NewsCard from "../Component/NewsCard";

export default function Detail() {
  let params = useParams();
  const BeritaID = params.BeritaID;
  const BeritaID2 = params.BeritaID2;
  const BeritaID3 = params.BeritaID3;
  const BeritaID4 = params.BeritaID4;
  const [berita, setBerita] = useState([]);
  var rows = [];
  for (var i = 1; i < 13; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Typography variant="subtile2"></Typography>);
  }

  useEffect(() => {
    const fetchDataBerita = async () => {
      try {
        const responseDariNews = await news.get(
          // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
          `/api/detail/${BeritaID}/${BeritaID2}/${BeritaID3}/${BeritaID4}`
        );
        // Jangan lupa set statenya
        // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
        setBerita(responseDariNews.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBerita()}, [BeritaID, BeritaID2, BeritaID3, BeritaID4]);

  return (
    <>
    <Navbar/>
      <NewsCard berita={berita} />
        <Footer/>
    </>
  );
}