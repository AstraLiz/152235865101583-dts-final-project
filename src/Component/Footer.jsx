import { Typography } from "@mui/material";
import React from "react";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" fontStyle={"Roboto"} fontSize={20}>
      {'Copyright © '}
        Game Flash <br/>
        Created By: Geovanni Alvin Prasetya
        {"   "}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        position: "sticky",
        paddingTop: 20,
        backgroundColor: "rgba(102, 255, 255)",
        fontFamily: "Roboto"
      }}
    >
      <Copyright />
    </div>
  );
}