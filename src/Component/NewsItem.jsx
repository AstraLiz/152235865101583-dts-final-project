import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export default function NewsItem(props) {
  return (
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="chameleons"
          height="140"
          alignContent="fill"
          image={props.news.thumb}
        />
        <CardContent sx={{ height: "auto" }}>
          <Typography gutterBottom component="div" marginBottom={2}>
            {props.news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"justify"}>
            {props.news.desc.substring(0, 200)}...
          </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: "center", alignItems: "center", paddingLeft: 12 }}>
          <Button size="small" variant="outlined" >
            {" "}
            <Link
              style={{ textDecoration: "none" }}
              to={`/detail/${props.news.key}`}
            >
              Read More
            </Link>
          </Button>
        </CardActions>
      </Card>
  );
}