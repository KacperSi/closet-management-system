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
  const [registerState, setRegisterState] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertState, setAletState] = useState(false);
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
    }
  };

  const login = async () => {
    console.log(loginText, passwordText);
    const res = await API.login(loginText, passwordText);
    if (res) {
      setLoginText("");
      setPasswordText("");
      setAletState(true);
      setAlert(true);
    } else {
      console.log("sth went wrong");
      setLoginText("");
      setPasswordText("");
      setAletState(false);
      setAlert(true);
    }
  };

  const handleRegistration = () => {
    registerState ? setRegisterState(false) : setRegisterState(true);
    console.log("REG");
  };

  const register = () => {
    if (passwordText === cpasswordText) {
      console.log(loginText, passwordText, emailText, cpasswordText);
      setPasswordAlert(false);
    } else {
      setPasswordAlert(true);
    }
  };

  return (
    <div>
      {registerState ? (
        <Stack spacing={2}>
          {alert ? <Alert severity="error">Unable to register</Alert> : ""}
          {passwordAlert ? (
            <Alert severity="error">Passwords are different</Alert>
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
            id="email"
            label="Email"
            variant="standard"
            onChange={handleChange}
            value={emailText}
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
            label="Confirtm Password"
            variant="standard"
            type="password"
            onChange={handleChange}
            value={cpasswordText}
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
