import {
    Box,
    CardContent,
    CardMedia,
    Paper,
    Typography,
  } from "@mui/material";
  import React from "react";
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import Link from '@mui/material/Link';
  
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

  export default function NewsCard(props) {
    const listItems = props.news.content;
    return (
      <div>
        <Paper sx={{ backgroundImage: `url("https://wallpaper.dog/large/526267.jpg")`,
          objectPosition: " center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "90%",
              borderTopRightRadius: "15em",
            }}
          >

            <Paper elevation={3} sx={{ marginTop: "2em", marginLeft: "7em", marginBottom: "3em" }}>
            <Box
              sx={{
              paddingTop: 5,
              paddingLeft: 5,
              alignItems: 'left',
              color: "red"
              }}
            >

          <Link href="/" 
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              fontFamily: "Roboto",
              fontSize: 20
            }}>


            <ArrowBackIcon 
             sx={{
              marginRight: 10,
              position: "center"
              }}>
              </ArrowBackIcon>
              </Link>
          </Box>
              <CardContent sx={{ textAlign: "justify", padding: "1em 5em 0em 5em" }}>
              <CardMedia
            component="img"
            sx={{
              width: "100%",
              objectFit: "contain",
              objectPosition: " center",
              height: "20em",
              marginBottom: "3em"
            }}
            image={props.news?.content?.[0] !== "" ? props.news?.content?.[0] : props.news.thumb}
            alt={props.news.title}
          />
                <Typography variant="h4" marginBottom={"1em"}>{props.news.title}</Typography>
                <Typography variant="body1">{props.news.date}</Typography>
                <Typography variant="body1">
                  Writter : {props.news.author}
                </Typography>
                <br />
                <br />
                <Typography variant="subtitle2" marginBottom={"2em"}>
                  {listItems}
                </Typography>
                
              </CardContent>
            </Paper>
          </Box>
          
        </Paper>
      </div>
    );
  }