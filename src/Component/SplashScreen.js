import styled from "styled-components";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from "@mui/material/Button";

// const Toggle = styled.button`
//     cursor: pointer;
//     height: 50px;
//     width: 50px;   
//     border-radius: 50%;
//     border: none;
//     background-color: ${props => props.theme.titleColor};
//     color: ${props => props.theme.pageBackground};
//     &:focus {
//         outline: none;
//     }
//     transition: all .5s ease;
// `;

// const Page = styled.div`
//   background-color: ${props => props.theme.pageBackground};
//   transition: all .5s ease;
// `;

function Splash(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    // const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

    return (
        // <Page>
            <Box
                sx={{
                    display: 'flex',
                    marginLeft: 9,
                    marginRight: 2,
                    height: "30px",
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                }}
                >
                <Button onClick={changeTheme}>
                    {props.theme} mode
                    <IconButton sx={{ ml: 1 }} color="inherit">
                    {props.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    </Button>
                </Box>
        // </Page>
    );
};

export default Splash;