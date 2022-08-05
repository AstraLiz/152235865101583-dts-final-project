import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../App/firebase';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        Game Flash
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const forgotPassword = (Email) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  console.log("reset email sent to " + Email);
  sendPasswordResetEmail(auth, Email, null)
      .then(() => {
          alert("reset email sent to " + Email);
      })
      .catch(function (e) {
          console.log(e);
      });
    }
  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/?gaming)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
          my: 3,
          mx: 4,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'left',
          color: "red"
          }}
          >
            
            <Link href="/Login" 
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              fontFamily: "Roboto",
              fontSize: 20
            }}>


            <ArrowBackIcon sx={{
              marginRight: 6
              }}>
              </ArrowBackIcon>
              </Link>
        </Box>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'orange', backgroundSize: 20}}>
              <RotateLeftIcon />
            </Avatar>
            <Typography fontSize={30} fontWeight={"bold"}>
              Password Reset
            </Typography>
            <Typography fontSize={15} marginBottom={2}>
                Please insert your email to reset the password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Request
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
              <Copyright sx={{ paddingTop: 15 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}

export default forgotPassword;