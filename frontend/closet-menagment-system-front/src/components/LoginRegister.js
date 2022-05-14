import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import API from "../API";

export const LoginRegister = () => {
  const [loginText, setLoginText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [cpasswordText, setcPasswordText] = useState("");
  const [location, setLocation] = useState("");
  const [registerState, setRegisterState] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === "login") {
      setLoginText(e.target.value);
    } else if (e.target.id === "password") {
      setPasswordText(e.target.value);
    } else if (e.target.id === "email") {
      setEmailText(e.target.value);
    } else if (e.target.id === "cpassword") {
      setcPasswordText(e.target.value);
    } else if (e.target.id === "location") {
      setLocation(e.target.value);
    }
  };

  const login = async () => {
    const res = await API.login(loginText, passwordText);
    if (res) {
      setLoginText("");
      setPasswordText("");

      setAlertState(true);
      setAlert(true);
    } else {
      setLoginText("");
      setPasswordText("");
      setAlertState(false);
      setAlert(true);
    }
  };

  const handleRegistration = () => {
    registerState ? setRegisterState(false) : setRegisterState(true);
  };

  const register = async () => {
    if (passwordText === cpasswordText) {
      const res = await API.register(
        loginText,
        passwordText,
        location,
        emailText,
        cpasswordText
      );

      if (res) {
        setLoginText("");
        setPasswordText("");
        setcPasswordText("");
        setLocation("");
        setAlertState(true);
        setAlert(true);
      } else {
        setLoginText("");
        setPasswordText("");
        setcPasswordText("");
        setLocation("");
        setAlertState(false);
        setAlert(true);
      }
    } else {
      return;
    }
  };

  return (
    <div>
      {registerState ? (
        <Stack spacing={2}>
          {alert ? (
            alertState ? (
              <Alert severity="success">Registered successful</Alert>
            ) : (
              <Alert severity="error">Unable to register</Alert>
            )
          ) : (
            ""
          )}
          <TextField
            id="login"
            label="Login"
            variant="standard"
            onChange={handleChange}
            value={loginText}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            onChange={handleChange}
            value={passwordText}
          />
          <TextField
            id="cpassword"
            label="Confirm Password"
            variant="standard"
            type="password"
            onChange={handleChange}
            value={cpasswordText}
          />
          <TextField
            id="location"
            label="Location"
            variant="standard"
            onChange={handleChange}
            value={location}
          />
          <Button onClick={register}>Register</Button>
          <Button onClick={handleRegistration}>Return</Button>
        </Stack>
      ) : (
        <Stack spacing={2}>
          {alert ? (
            alertState ? (
              <Alert severity="success">Successful login</Alert>
            ) : (
              <Alert severity="error">Unable to login</Alert>
            )
          ) : (
            ""
          )}
          <TextField
            id="login"
            label="Login"
            variant="standard"
            onChange={handleChange}
            value={loginText}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            onChange={handleChange}
            value={passwordText}
          />
          <Button onClick={login}>Login</Button>
          <Button onClick={handleRegistration}>Register</Button>
        </Stack>
      )}
    </div>
  );
};
