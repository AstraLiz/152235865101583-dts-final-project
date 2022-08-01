import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        
        padding: "1em",
        backgroundColor: "rgba(255, 255, 255, 0.7)"
      }}
    >
      <Typography variant="h6">
        &copy; Created by: Geovanni Alvin Prasetya
      </Typography>
      <Box>
        <IconButton size="medium">
          Facebook
          <Facebook /> 
        </IconButton>
        <IconButton size="medium">
          Twitter
          <Twitter />
        </IconButton>
        <IconButton size="medium">
          Instagram
          <Instagram />
        </IconButton>
      </Box>
    </div>
  );
}