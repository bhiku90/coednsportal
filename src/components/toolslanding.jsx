import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { Grid, Skeleton, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import "./toolslanding.css";
//import Particles from "react-particles-js";
import ParticleConfig from "./Config/particle-config";
import "./loader.css";
import Particle from "./Particle";

export const Toolslanding = ({ setDataInTable }) => {
  const testInput = useRef();
  const [flag, setFlag] = useState(false);
  const [testerr, settesterr] = useState("");
  const [capVal, setcapVal] = useState("");
  const [namestatus, setnamestatus] = useState("");
  const [serverError, setserverError] = useState("");
  const [loading,setLoading] = useState(true);

  let newarray = [],
    pdfGenrate,
    inputDomain;
  const valFun = (e) => {
    e.preventDefault();
    inputDomain = testInput.current.value;
    settesterr("");
  };
  const toolsDomain = () => {
    
    setserverError("");
    setDataInTable("");
    setnamestatus("");
    settesterr("");
    checkBtn();
    reloadBtn();
    //const isValidDomain = require("is-valid-domain");
    // if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(inputDomain)) {
    //   checkBtn();
    // } else {
    //   settesterr("Please Enter a Valid Fully Qualified Domain Name(FQDN)");
    // }
  };
  const handleReset = () => {
    reloadBtn();
    setDataInTable();
    testInput.current.value = "";
    setnamestatus("");
    setserverError("");
    setFlag(true);
    removeContent();
  };

  const fetchDetails = async (e) => {
    let reachabilityData = [],
      ednsData = [],
      availbilityData = [],
      soaData = [],
      acData = [],
      ztData = [],
      rqData = [],
      nsec3Data = [],
      sobsData = [],
      nameserverptrData = [],
      domainptrData = [],
      rrsetmatchData = [],
      rrtData = [],
      dnssecData = [],
      domainptrvalidData = [],
      nameserverData = {},
      nsipData = {},
      reach = [],
      availb = [],
      avilName = [],
      reachName = [],
      reachabilityVal = [],
      nameserverptrvalidData = [];
    const start = Date.now();
    setFlag("start");
    //console.log(inputDomain);
    nameserverData = await axios
      .post("https://coednssecurity.in/healthmediator/nameserver", {
        domain: `${inputDomain}`,
      })
      .then((response) => {
        if (
          response.status === 200 &&
          response.data.nameserver_status == "pass"
        ) {
          //console.log(response.data.domainname);
          return response.data;
        } else if (
          response.status === 200 &&
          response.data.nameserver_status == "serverdown"
        ) {
          setserverError("Server issue. Kindly report to: rise@cdac.in.");
          setFlag("end");
          setFlag(true);
          return response.data;
        } else if (
          response.status === 200 &&
          response.data.nameserver_status == "fail"
        ) {
          setnamestatus("No Such Domain Exists");
          setTimeout(() => {
            removeContent();
          }, 2000);
          getCaptcha();
          setFlag("end");
          setFlag(true);
          return {};
        } else {
          setnamestatus("Server issue. Kindly report to: rise@cdac.in.");
          setFlag("end");
          setFlag(true);
          return {};
        }
      })
      .catch((error) => {
        setserverError("Server issue. Kindly report to: rise@cdac.in.");
        console.log(error);
        setFlag("end");
        setFlag(true);
        return {};
      });

    let nameServers = nameserverData.nameserver || [];
    inputDomain = nameserverData.domainname || [];
    // console.log(inputDomain);
    let nameServerListLength = nameServers.length || 0;
    let domainips = nameserverData.domainip || [];

    if (nameServerListLength) {
      reachabilityData = await Promise.all(
        nameServers.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/reachability", {
              domain: `${inputDomain}`,
              url: nameServer,
            })
            .then((response) => {
              if (
                (response.status === 200 && response.data.tcpv4 === "pass") ||
                response.data.tcpv6 === "pass" ||
                response.data.udpv4 === "pass" ||
                response.data.udpv6 === "pass"
              ) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      reach = reachabilityData.filter((element) => {
        if (Object.keys(element).length !== 0) {
          return true;
        } else {
          return false;
        }
      });
      availbilityData = await Promise.all(
        reach.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/availability", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (
                response.status === 200 &&
                response.data.avail_status === "pass"
              ) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      availb = availbilityData.filter((ele) => {
        if (Object.keys(ele).length !== 0) {
          return true;
        } else {
          return false;
        }
      });
      avilName = availb.map((objm) => {
        return objm;
      });
      reachName = reach.map((objr) => {
        return objr;
      });
      reachabilityVal = reachName.filter((o1) =>
        avilName.some((o2) => o1.nameserver === o2.nameserver)
      );
      ednsData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/edns", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      soaData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/soaserial", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      acData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/ac", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      ztData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/zt", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      rqData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/rq", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      nsec3Data = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/nsec3", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      sobsData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/sobs", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      nameserverptrData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/nameserverptr", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      domainptrData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/domainptr", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      rrsetmatchData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/rrsetmatch", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      rrtData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/rtt", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      dnssecData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/dnssec", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      domainptrvalidData = await Promise.all(
        domainips.map(async (domainip) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/domainptrvalid", {
              domain: `${inputDomain}`,
              domainip: [domainip],
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      nsipData = await Promise.all(
        availb.map(async (nameServer) => {
          return await axios
            .post("https://coednssecurity.in/healthmediator/nsip", {
              domain: `${inputDomain}`,
              url: nameServer.nameserver,
            })
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );
      nameserverptrvalidData = await Promise.all(
        nsipData.map(async (objc) => {
          return await axios
            .post(
              "https://coednssecurity.in/healthmediator/nameserverptrvalid",
              {
                domain: `${inputDomain}`,
                url: objc.domain,
                nsip: objc["nameserveripstatus"],
              }
            )
            .then((response) => {
              if (response.status === 200) {
                return response.data;
              } else {
                return {};
              }
            })
            .catch((error) => {
              console.log(error);
              return {};
            });
        })
      );

      setFlag("end");
    }
    newarray = availb.map((element, i) =>
      Object.assign(
        {},
        element,
        //availb,
        reachabilityVal[i],
        nameserverData,
        ednsData[i],
        availbilityData[i],
        soaData[i],
        acData[i],
        ztData[i],
        rqData[i],
        nsec3Data[i],
        sobsData[i],
        nameserverptrData[i],
        domainptrData[i],
        rrsetmatchData[i],
        rrtData[i],
        dnssecData[i],
        domainptrvalidData[i],
        domainptrvalidData,
        nsipData[i],
        nameserverptrvalidData[i]
      )
    );
    pdfGenrate = axios
      .post("https://coednssecurity.in/healthmediator/downloadpdf", {
        newarray,
      })
      .then((response) => {
        if (response.status === 200) {
          //console.log(response.data);
          return response.data;
        } else {
          return {};
        }
      })
      .catch((error) => {
        console.log(error);
        return {};
      });

    const stop = Date.now();
    console.log(`Time taken = ${(stop - start) / 1000} seconds`);
    setDataInTable({
      newarray,
      nameserverData,
      reachabilityVal,
      domainptrvalidData,
      nameserverptrvalidData,
      inputDomain,
    });
  };

  const getCaptcha = () =>{
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
  }

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
    <Box
      id="dnshealth"
      className="text-center"
      style={flag === "start" ? { opacity: "0.9", pointerEvents: "none" } : {}}
    >
      <div className={flag === "start" ? "loader" : "none"}>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--text"></div>
      </div>
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
            Domain Nameserver Health Analyser
          </Box>

          <Box
            sx={{
              typography: "body1",
              letterSpacing: "1px",
              color: "GrayText",
              fontSize: 20,
            }}
          >
            Detailed Report
          </Box>
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
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
            />
          </Box>
          <Typography sx={{ color: "#ff0000", fontSize: 18 }}>
            {testerr}
          </Typography>
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
                  backgroundColor: "#d8fcfe",
                  opacity: "0.6",
                  marginRight: "100px",
                }}
              >
                <CardContent>
                  <Grid>
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
                      {loading ? "Loading..." : capVal}
                    </Typography>
                  </Grid>
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
          <br />
          <p id="status"></p>
          <div style={{ color: "#db1414" }}>{serverError}</div>
          <div style={{ color: "darkred" }}>{namestatus}</div>
          <br />
          <Stack
            spacing={{ xs: 1, sm: 1, md: 2 }}
            direction={{ xs: "column", sm: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
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
              style={{
                maxWidth: "170px",
                maxHeight: "50px",
                minWidth: "10px",
                minHeight: "50px",
                fontSize: "18px",
              }}
              size="small"
              variant="outlined"
              color="error"
              onClick={handleReset}
            >
              RESET
            </Button>
            <Button
              style={
                flag === "end"
                  ? {
                      fontSize: "15px",
                      maxWidth: "200px",
                      maxHeight: "50px",
                      minWidth: "170px",
                      minHeight: "50px",
                    }
                  : { display: "none" }
              }
              variant="text"
              color="error"
              href="https://coednssecurity.in/healthmediator/download/external"
            >
              Download Report&nbsp;
              <i className="fa fa-download" aria-hidden="true"></i>
            </Button>
          </Stack>
          <Box sx={{ typography: "body1", color: "GrayText", fontSize: 15 }}>
            <b>Note : </b>The result reflects the status of the Nameserver
            resolving the given domain at that instance of time and therefore
            may vary temporally.
            <br />
            <b>Any issues please report to rise@cdac.in</b>
          </Box>
        </div>
      </div>
      <Divider sx={{ marginTop: 3, width: 185 }} variant="middle" />

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
            width={1800}
            height={600}
            style={{
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </>
      ) : null}
    </Box>
  );
};
