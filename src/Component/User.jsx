import React, { useEffect, useState } from "react";

import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

import {
    auth,
    userLogin,
    userRegister,
  } from "../App/firebase";

  import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
    const navigate = useNavigate();

    const [user, isLoading] = useAuthState(auth);

const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

const loginHandler = () => {
    userLogin(credential.email, credential.password);
};

const registerHandler = () => {
    userRegister(credential.email, credential.password);
};

const buttonLoginOrRegisterOnClickHandler = () => {
  if (loginOrRegister === "login") {
    loginHandler();
  } else {
    registerHandler();
  }
};
useEffect(
    () => {
        if (isLoading) {
            return;
        }
       
        if (user) {
        navigate("/");
    }
},
[user, isLoading, navigate]
);

return (
  <div style={{}}>
    <Paper
      elevation={3}
      sx={{
        margin: "auto",
        minWidth: "20em",
        padding: "1em",
        maxWidth: "35em",
        backgroundColor: "rgba(255, 255, 255, 0.7)"
      }}
    >
      <Typography
        variant="body1"
        sx={{
          marginBottom: "1em",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        {loginOrRegister === "login" ? "Login " : "Daftar"}
      </Typography>

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        value={credential.email}
        onChange={textFieldEmailOnChangeHandler}
      />
      <br />
      <br />
      <TextField
        label="Password"
        type="Password"
        variant="outlined"
        fullWidth
        value={credential.password}
        onChange={textFieldPasswordOnChangeHandler}
      />
      <br />
      <br />
      <Button
        variant="contained"
        fullWidth
        onClick={buttonLoginOrRegisterOnClickHandler}
      >
        {loginOrRegister === "login" ? "Login" : "Register"}
      </Button>
      <br />
      <br />

      {loginOrRegister === "login" ? (
        <Link to="/register" variant="info ">
          <Button variant="outlined" fullWidth={true}>
            New member? Register Here
          </Button>
        </Link>
      ) : (
        <Link to="/login" variant="info">
          <Button variant="outlined" fullWidth={true}>
            Login instead
          </Button>
        </Link>
      )}
      <br />
      <br />
      <Link to="/" variant="info ">
        <Button variant="contained" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Link>

    </Paper>
  </div>
);
};

export default LoginOrRegisterForm;