import React from "react";
import Navbar from "../Container/Navbar";
import CarouselNews from "../Container/NewsCarousel";

import { Box, Paper } from "@mui/material";
import SliderTab from "../Component/SliderTab";
import Footer from "../Component/Footer";
import Content from "../Container/Content";
import Filter from "../Container/Filter";
export default function HomePage() {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp9378601.jpg")`,
          objectPosition: " center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <CarouselNews />
        <Paper elevation={3} sx={{ margin: "1em",backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
          <Box>
            <SliderTab />
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ margin: "1em",backgroundColor: "rgba(255, 255, 255, 0.7)", padding:'1em' }}>
          <Filter />
        </Paper>
        <Footer />
      </Paper>
    </>
  );
}