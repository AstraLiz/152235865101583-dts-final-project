import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Typography,
  Card,
  Box,
  CardContent,
  CardMedia,
} from "@mui/material";
import News from "../App/news";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NewsCarousel() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const responseFromNews = await News.get(
          "/api/games"
        );

        setNews(responseFromNews.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNewsData();
  }, []);

  return (
    <Carousel>
      {news.slice(-6).map((news) => {
        return (
          <Paper>
            <Card sx={{ display: "flex"}}>
              <CardMedia
                component="img"
                sx={{
                  width: "80%",
                  objectFit: "initial",
                  objectPosition: "left",
                  height: "20em",
                  imageResolution: "1080px"
                }}
                image={news.thumb}
                alt={news.title}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "",
                  maxWidth: "60%",
                  paddingTop: "5em",
                  backgroundColor: "rgba(255, 153, 51, 0.6)",
                  color: "white",
                  height: "15em",
                }}
              >
                <CardContent sx={{ flex: "0 0 1m", position: "right"}}>
                  <Typography variant="h5" sx={{ marginBottom: "2em", marginTop: "-2em" }}>
                    {news.title}
                  </Typography>
                  <Typography marginBottom={4}>{news.desc.substring(0, 200)}</Typography>
                  <CardActions sx={{ textAlign: "center", alignContent: "center" }}>
                  <Button size="small" variant="outlined" position="center">
                  {" "}
                      <Link
                        style={{ textDecoration: "none" , display: "flex", position: "right"}}
                        to={`/detail/${news.key}`}
                      >
                        Read More 
                      </Link>
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Card>
          </Paper>
        );
      })}
    </Carousel>
  );
}