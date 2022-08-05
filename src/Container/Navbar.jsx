import * as React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, userLogout } from "../App/firebase";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ToggleColorMode from "../Component/DarkMode.jsx"

import Splash from "../Component/SplashScreen"
import {useState} from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

import Logo from "../Asset/Game-flash.svg"

import { Home, LoginOutlined } from "@mui/icons-material";

const LightTheme = {
  backgroundColor: "white",
  color: "white"
}

const DarkTheme = {
  backgroundColor:"black",
  color: "black"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme

}

const Page = styled.div`
  backgroundColor: ${props => props.theme.backgroundColor};
  transition: all .5s ease;
`;

export default function Navbar() {
  const [theme, setTheme] = useState("light")
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const buttonLogoutOnClickHandler = async () => {
    await userLogout();
    navigate("/");
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "inherit" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{height: 80}}>
          <img 
            style={{
              height: 80,
              width: 200,
              display: "flex",
              borderRightRadius: 500
            }}
            src={Logo} alt="Logo"
            />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  to="/"
                  sx={{
                    textDecorationColor: " none",
                    textDecorationLine: "none",
                  }}
                >
                  <Typography
                    sx={{
                      textDecorationColor: "none",
                      color: "black",
                      textDecorationLine: "none",
                      fontFamily: "Roboto",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <Link
                  to="/search"
                  sx={{
                    textDecorationColor: " none",
                    textDecorationLine: "none",
                  }}
                >
              <MenuItem onClick={handleCloseNavMenu}>
                
                  <Typography
                    sx={{
                      textDecorationColor: "none",
                      color: "black",
                      textDecorationLine: "none",
                      fontFamily: "Roboto",
                    }}
                  >
                    Cari Berita
                  </Typography>
                
              </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Link to="/">
            <Home sx={{ display: { xs: "none", md: "none" }, mr: 1 }} />
            <Typography
              variant="body1"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "none", md: "none" },
                flexGrow: 1,
                fontFamily: "Roboto",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Game Flash
            </Typography>
          </Link>
          <Box sx={{
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 6
            }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                ml: 8,
                color: "white",
                display: "block",
                textDecorationColor: " none",
                textDecorationLine: "none",
              }}
            >
              <Link
                to="/"
                style={{textDecoration: "none"}}
                sx={{
                  textDecorationColor: " none",
                  textDecorationLine: "none",
                }}
              >
                <Typography
                  sx={{
                    textDecorationColor: "none",
                    color: "black",
                    textDecorationLine: "none",
                    fontFamily: "Helvetica",
                    fontSize: 20
                  }}
                >
                  Home
                </Typography>
              </Link>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textDecorationColor: " none",
                textDecorationLine: "none",
              }}
            >
              <Link
                to="#"
                style={{textDecoration: "none"}}
                sx={{
                  textDecorationColor: " none",
                  textDecorationLine: "none",
                }}
              >
                <Typography
                  sx={{
                    textDecorationColor: "none",
                    color: "black",
                    textDecorationLine: "none",
                    fontFamily: "Helvetica",
                    fontSize: 20
                  }}
                >
                  Reviews
                </Typography>
              </Link>
            </Button>

            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textDecorationColor: " none",
                textDecorationLine: "none",
              }}
            >
              <Link
                to="#"
                style={{textDecoration: "none"}}
                sx={{
                  textDecorationColor: " none",
                  textDecorationLine: "none",
                }}
              >
                <Typography
                  sx={{
                    textDecorationColor: "none",
                    color: "black",
                    textDecorationLine: "none",
                    fontFamily: "Helvetica",
                    fontSize: 20
                  }}
                >
                  About me
                </Typography>
              </Link>
            </Button>

            <Link
                to="/search"
                style={{textDecoration: "none"}}
                sx={{
                  textDecorationColor: " none",
                  textDecorationLine: "none",
                }}
              >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                textDecorationColor: " none",
                textDecorationLine: "none",
              }}
            >
                <Typography
                  sx={{
                    textDecorationColor: "none",
                    color: "black",
                    textDecorationLine: "none",
                    fontFamily: "Helvetica",
                    fontSize: 20
                  }}
                >
                  Search
                </Typography>
              
            </Button>
            </Link>
          </Box>

          <Splash theme = {theme} setTheme={setTheme} />
          <Box sx={{ flexGrow: 0 }}>
            {user != null ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ marginRight: "10em" }}>
                  {user.email}
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Arnold"
                      src="https://temank3.id/public/images/default.jpg"
                    />
                  </IconButton>
                </Tooltip>{" "}
              </div>
            ) : (
              <Button
            type="submit"
            variant="contained"
            sx={{ mt: 1, mb: 1, length: 200, width: 100, paddingLeft: -10, backgroundColor: "rgb(0, 206, 209)"}}
          >
              <Link
                to="/Login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                  fontFamily: "Roboto",
                  fontSize: 20
                }}
              >
                <Typography>Login</Typography>
                <Tooltip>
                  <LoginOutlined onClick={handleOpenUserMenu} sx={{ p: 0 }} />
                </Tooltip>
              </Link>
              </Button>
            )}

            <Menu
              sx={{ mt: "4px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                {user != null ? (
                  <Typography
                    variant="body1"
                    sx={{
                      display: { xs: "flex", sm: "block" },
                      textTransform: "uppercase",
                      textDecorationColor: "none",
                      color: "white",
                      textDecorationLine: "none",
                      fontFamily: "Roboto",
                    }}
                  >
                    <Button onClick={buttonLogoutOnClickHandler}>Logout</Button>
                  </Typography>
                ) : (
                  ""
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}