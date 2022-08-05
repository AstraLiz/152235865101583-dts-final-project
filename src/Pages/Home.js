import React from "react";
import Navbar from "../Container/Navbar";
import NewsCarousel from "../Container/NewsCarousel";

import { Box, Paper } from "@mui/material";
import Footer from "../Component/Footer";
import NewsItem from "../Component/NewsItem";
import Content from "../Container/Content";

import Splash from "../Component/SplashScreen"
import {useState} from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

export default function Home() {
  const [theme, setTheme] = useState("light")
  return (
      <Paper
        sx={{
          backgroundImage: `url("https://wallpaper.dog/large/526267.jpg")`,
          objectPosition: " center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <NewsCarousel />
        <Paper elevation={3} sx={{ margin: "1em",backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
          <Box>
            <Content />
          </Box>
        </Paper>
        <Footer />
      </Paper>
  );
}