import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
//import Particles from "react-particles-js";
import ParticleConfig from "./Config/particle-config";
import "./Login.css";
import Divider from "@mui/material/Divider";
import { CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Particle from './Particle';

export const Login = ({ routeTool, setEnableMap }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [capVal, setcapVal] = useState("");
  const [captchaVerify, setCaptchaVerify] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    checkBtn();
    reloadBtn();
  };

  const verifyLoginFunction = async (e) => {
    const loginjson = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post("https://coednssecurity.in/healthmediator/loginmap", {
        loginjson,
      });

      if (response.data === "Successful") {
        const expirationTime = new Date().getTime() + 5 * 60 * 1000; // Current time + 5 minutes in milliseconds
        localStorage.setItem(
          "session",
          JSON.stringify({
            loggedIn: true,
            expiration: expirationTime,
          })
        );
        setEnableMap(true);
        routeTool("vmap");
        document.getElementById("menu").style.display = "none";
      } else {
        document.getElementById("status").style.display = "block";
        status.style.color = "#ff0000";
        status.innerText = "Invalid Username or Password!";
        setCaptchaVerify(false);
        setTimeout(() => {
          removeContent();
        }, 2000);
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (captchaVerify) {
      verifyLoginFunction();
    }
  }, [captchaVerify]);
 

  const getCaptcha = () => {
    setLoading(true);
 
    try {

      axios
      .get("https://coednssecurity.in/healthmediator/api/captcha/generate")
      .then((response) => {
        //captcharef = response.data.captcha;
        setcapVal(response.data.captcha);
        setLoading(false);
      })
      .catch((error) => {
       
         console.error("Error fetching captcha:", error.message);
        
      });




     
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setLoading(true);
    
   
      getCaptcha();

    
  }, []);

  const reloadBtn = () => {
    setcapVal("");
    getCaptcha();
    removeContent();
  };

  const removeContent = () => {
    inputVal.current.value = "";
    document.getElementById("status").style.display = "none";
  };

  const inputVal = useRef();
  let status = document.getElementById("status");

  const checkBtn = () => {
    try {
      axios
        .post("https://coednssecurity.in/healthmediator/api/captcha/verify", {
          enteredCaptcha: inputVal.current.value,
          generatedCaptcha: capVal,
        })
        .then((response) => {
          if (response.data.status === "Successful") {
            setCaptchaVerify(true);
          } else {
            setCaptchaVerify(false);
            document.getElementById("status").style.display = "block";
            status.style.color = "#ff0000";
            status.innerText = "Captcha not matched. Please try again!";
            setTimeout(() => {
              removeContent();
            }, 2000);
          }
        })
        .catch((error) => {
         
           console.error("Error fetching captcha:", error.message);
          
        });
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <Box id="signup" className="text-center">
      <div className="auth-container">
        <Particle></Particle>
    
        <div id="mainrendersignup">
          <Box
            sx={{
              typography: "body1",
              letterSpacing: "1px",
              color: "black",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Login
          </Box>

          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2, width: "30ch" },
            }}
            autoComplete="off"
          >
            <TextField
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 19 } }}
              label="User Name"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Box>

          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2, width: "30ch" },
            }}
            autoComplete="off"
          >
            <TextField
              InputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 19 } }}
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Box>

          {/* <Typography sx={{ color: "#ff0000", fontSize: 18 }}>{testerr}</Typography> */}

          <Box>
            <Box
              sx={{
                minWidth: 200,
                display: "inline-block",
                margin: "0 2px",
                transform: "scale(0.8)",
              }}
            >
              <Card
                variant="outlined"
                style={{
                  position:"relative",
                  backgroundColor: "#d8fcfe",
                  opacity: "0.6",
                  marginRight: "30px",
                }}
              >
                <CardContent>
                  <Grid>
                    <Typography
                      letterSpacing={8}
                      sx={{
                        fontStyle: "italic",
                        fontWeight: 1000,
                        fontSize: 30,
                        fontFamily: "Monospace",
                        textShadow: "3px 3px 3px #ababab",
                        userSelect: "none",
                        color: "rosybrown",
                      }}
                      className="captcha"
                      component="span"
                    >
                       {loading ? "Loading..": capVal}
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <TextField
                sx={{marginLeft:"40px"}}
                inputRef={inputVal}
                InputLabelProps={{ style: { fontSize: 18 } }}
                InputProps={{ style: { fontSize: 15 } }}
                spellCheck="false"
                label="Enter capcha"
                variant="filled"
                size="normal"
                color="primary"
                required
              />
              <IconButton
                sx={{ ml: 1 }}
                color="primary"
                aria-label="reload"
                component="span"
                size="large"
                onClick={reloadBtn}
              >
                <CachedIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
          <p id="status"></p>
          {/* {errorMessage && <p id="status">{errorMessage}</p>} */}

          <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </Box>
        </div>
        <Divider sx={{ marginTop: 1, width: 385 }} variant="middle" />
      </div>
    </Box>
  );
};
