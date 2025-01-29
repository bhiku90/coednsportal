import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { Skeleton, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import IconButton from "@mui/material/IconButton";


import "./punny.css";
//import Particles from "react-particles-js";
import ParticleConfig from "./Config/particle-config";
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Particle from "./Particle";

export const Punny = ({setDataInPunnyTable}) => {
  const testInput = useRef();
  const [flag, setFlag] = useState("");
  const [testerr, settesterr] = useState("");
  const [capVal, setcapVal] = useState("");
  const [namestatus,setnamestatus] = useState("");
  const [serverError, setserverError] = useState("");
  const [loading,setLoading] = useState(true);
  let inputDomain;

  const valFun = (e) => {
    e.preventDefault();
    inputDomain = testInput.current.value;
    setserverError("");
    settesterr("");
  };

  const toolsDomain = () => {
    
    setserverError("");
    setDataInPunnyTable("");
    setnamestatus("");
    settesterr("");
    checkBtn();
    reloadBtn();
    //fetchDetails();
    //const isValidDomain = require("is-valid-domain");
    // if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(inputDomain)) {
    //   checkBtn();
    // } else {
    //   settesterr("Please Enter a Valid Fully Qualified Domain Name(FQDN)");
    // }
  };
  const handleReset = () => {
    setDataInPunnyTable("");
    testInput.current.value = "";
    setnamestatus("");
    settesterr("");
    setserverError("");
    reloadBtn();
  };

  const fetchDetails = async (e) => {
    let punnyData = {},
    newarray=[],
    availb=[];

    const start = Date.now();
    setFlag("start");
    punnyData = await axios.post("https://coednssecurity.in/healthmediator/punny", {
        domain: `${inputDomain}`,
      })
      .then((response) => {
        if ( response.data.status !== "fail" && response.data.jadu !== "PunnyCode not Available") {
            //console.log("TRUE"+response.data.jadu);
            return response.data;
          }else if(response.data.jadu === "PunnyCode not Available"){
              //console.log("PunyCode not Available");
              setnamestatus("PunyCode not Available");
              setFlag("end");
              return {};
          }
          else{
            setnamestatus("No PunyCode Domain Exists");
            setFlag("end");
            return {};
          }
      }).catch((error)=>{
         setserverError("Server issue. Kindly report to: css@cdac.in.");
         console.log(error);
         return{};
      });
            let punnyDataRespStatus = punnyData.jadu || [];
            let punnyDataRespDomain = punnyData.domain || [];
            //let punnyListLength = punnyData.jadu.length || 0;
      setFlag("end");

    //console.log(punnyListLength);
    const stop = Date.now();
    console.log(`Time taken = ${(stop - start) / 1000} seconds`);
    setDataInPunnyTable({
      punnyDataRespStatus,
      punnyDataRespDomain,
      inputDomain,
    });
  }

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
          setserverError("Kindly check yout internet connection. ");
           console.error("Error fetching captcha:", error.message);
          
        });
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  var captcharef = useRef("");

  useEffect(() => {
    setLoading(true);
    getCaptcha();
  }, []);

  const reloadBtn = () => {
    setcapVal("");
    getCaptcha();
    removeContent();
   
  };

  var removeContent = () => {
    inputVal.current.value = "";
    // capVal = "";
    status.style.display = "none";
  };
  const inputVal = useRef();
  let status = document.getElementById("status");

  var checkBtn = () => {
    try {
      axios
        .post("https://coednssecurity.in/healthmediator/api/captcha/verify", {
          enteredCaptcha: inputVal.current.value,
          generatedCaptcha: capVal,
        })
        .then((response) => {
          if (response.data.status === "Successful") {
            fetchDetails();
          } else {
            status.style.display = "block";
            status.style.color = "#ff0000";
            status.innerText = "Captcha not matched. Please try again!";
            setTimeout(() => {
              removeContent();
            }, 2000);
          }
        })
        .catch((error) => {
          setserverError("Kindly check yout internet connection. ");
           console.error("Error fetching captcha:", error.message);
          
        });
    } catch (error) {
      console.error(error.response.data.message);
    }
};
  
  return (
    <div id="punny" className="text-center" style={ flag === "start" ? { opacity: '0.7', pointerEvents:'none'} : {}}>
    <Particle></Particle>
    <div className="col-xs-12 col-sm-12">
      <div id="mainrender" className="search box container">
        <Box
          sx={{
            typography: "body1",
            letterSpacing: "1px",
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          Domain PunyCode Identifier
        </Box>
        <br />
        <Box
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 4, width: "100ch" },
          }}
          autoComplete="off"
        >
          <TextField
            InputProps={{ style: { fontSize: 20 } }}
            InputLabelProps={{ style: { fontSize: 19 } }}
            id="outlined"
            label="Please Enter your Domain"
            variant="outlined"
            inputRef={testInput}
            onChange={valFun}
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />
        </Box>
        <Typography sx={{ color: "#ff0000", fontSize: 18 }}>
          {testerr}
        </Typography>

        <Box>
            <Box
              sx={{
                minWidth: 300,
                display: "inline-block",
                margin: "0 1px",
                transform: "scale(0.8)",
              }}
            >
              <Card
                variant="outlined"
                style={{
                  backgroundColor: "#d8fcfe",
                  opacity: "0.6",
                  marginRight: "100px",
                }}
              >
                <CardContent>
                  <Typography
                    letterSpacing={8}
                    sx={{
                      fontStyle: "italic",
                      fontWeight: 500,
                      fontSize: 30,
                      fontFamily: "Monospace",
                      textShadow: "3px 3px 3px #ababab",
                      userSelect: "none",
                      color: "rosybrown",
                    }}
                    className="captcha"
                    ref={captcharef}
                    component="span"
                  >
                    {loading ? "Loading...." : capVal}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <TextField
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
                sx={{ ml: 2 }}
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

{/* 
        <Box>
          <Box
            sx={{
              minWidth: 300,
              display: "inline-block",
              margin: "0 1px",
              transform: "scale(0.8)",
            }}
          >
            <Card
              variant="outlined"
              style={{ backgroundColor: "#d8fcfe", opacity: "0.6", marginRight:"100px"}}
            >
            </Card>
          </Box>
        </Box> */}



        
      
        <p id="status"></p>
        <div style={{color:"#db1414"}}>{serverError}</div>
        <div style={{color:"darkred"}}>{namestatus}</div>
        <br/>
        <Stack spacing={2} direction="row" justifyContent={"center"}>
          <Button
            style={{
              maxWidth: "170px",
              maxHeight: "50px",
              minWidth: "170px",
              minHeight: "50px",
              fontSize: "18px",
            }}
            id="enable"
            size="large"
            variant="outlined"
            endIcon={<SendIcon />}
            color="success"
            onClick={toolsDomain}
          >
            Submit
          </Button>
          <Button
            style={{ fontSize: "18px" }}
            variant="outlined"
            color="error"
            onClick={handleReset}
          >
            RESET
          </Button>
        </Stack>
        
        <br />
        <Box sx={{ typography: "body1", color: "GrayText", fontSize: 15 }}>
          <b>Note : </b>This tool identifies the active punycode domains for the given domain.<br/>The tool has to execute several permutations and so it takes few minutes(5 to 15 min.) to display the output.
        </Box>
      </div>
    </div>
      <Divider sx={{ marginTop: 5, width: 185 }} variant="middle" />
      
      {flag === "start" ? (
        <>
          <Box
            sx={{
              paddingTop: 7,
              width: 600,
              display: "flex",
              flexDirection: "column",
              marginRight: "40",
              paddingLeft: 7,
            }}
          >
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Box>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={1700}
            height={300}
            style={{
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </>
      ) : null}
    </div>
  );
};

