import React, { useState } from "react";
import "./Login.css";
import {
  Container,
  Card,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  loginButton,
  loginCard,
  loginContainer,
  loginFieldDivBox,
  loginHeadingTextStyle,
  loginInputField,
} from "./LoginStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

// ** Third party imports
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({ phoneNumber: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const formDataOnChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = {};

    if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone Number is required";
    }

    if (!formData.password || formData.password.trim() === "") {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    setLoader(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST_API_KEY}/v1/auth/login`,
        formData
      );
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      localStorage.setItem(
        "isSuperAdmin",
        response.data.data.user.isSuperAdmin
      );
      setLoader(false);
      navigate("/");
    } catch (error) {
      let message = error?.response?.data?.message;
      if (message) {
        toast.error(message);
      } else {
        toast.error("Something went wrong");
      }
      setLoader(false);
    }
  };

  return (
    <div className="login_mainDiv">
      <Container sx={loginContainer}>
        <Card sx={loginCard}>
          <Typography
            sx={{
              fontFamily: "Poppins-Bold",
              fontSize: "40px",
              lineHeight: "35px",
              color: "#040f25",

              [`@media screen and (min-width: 600px)`]: {
                fontSize: "35px",
                marginTop: "15px",
              },
              [`@media screen and (min-width: 900px)`]: {
                fontSize: "35px",
                marginTop: "15px",
              },
              [`@media screen and (min-width: 1520px)`]: {
                fontSize: "35px",
                marginTop: "15px",
              },
            }}
          >
            shoppable
          </Typography>
          <Box sx={loginFieldDivBox} autoComplete="off">
            <Typography variant="body1" sx={loginHeadingTextStyle}>
              Please login to continue
            </Typography>
            <br />
            <form
              style={{ width: "100%" }}
              onSubmit={handleSubmit}
              onError={(errors) => {
                console.log(errors);
              }}
            >
              <TextField
                id="outlined-required"
                label="Phone Number"
                name="phoneNumber"
                sx={loginInputField}
                onChange={formDataOnChange}
                error={!!error.phoneNumber}
                helperText={error.phoneNumber}
              />
              <TextField
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                label="Password"
                placeholder="Enter Password"
                name="password"
                error={!!error.password}
                helperText={error.password}
                sx={loginInputField}
                onChange={(event) => formDataOnChange(event)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" sx={loginButton} type="submit">
                {loader ? (
                  <CircularProgress sx={{ color: "#D52027" }} />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Box>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
