import React, { useState, useRef, useEffect } from "react";
import "./toolslanding.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Stack from "@mui/material/Stack";

export const SpamBox = () => {
  const testInput = useRef();
  let inputDomain,
   maliciousReportData =[];
   const [resp, setResp] = useState([]);
  

  const inpFun = (e) => {
    e.preventDefault();
    inputDomain = testInput.current.value;
  };

  const setserverError = '';

  const Resetbtn = () => {
    testInput.current.value = "";
    setResp("");
  };

  const maliciousfun = async (e) => {
      maliciousReportData = await axios.post("https://coednssecurity.in/healthmediator/reportmaliciousdomain", {
          mdd: `${inputDomain}`,
        })
        .then((response) => {
          if (response.status === 200) {
              setResp(response.data.status);
              return response.data;
            }else{
              return {};
            }
        }).catch((error)=>{
           setserverError("Server issue. Kindly report to: css@cdac.in.");
           console.log(error);
           return{};
        });
        
      }
  return (
    <div id="spambox" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Spam Box</h2>
          <div id="mainrender">
          <br />
            <h2 style={{fontSize:"23px"}}>Report Spam Email</h2>
          <h3>
            Help us in developing Email Safety Scorer. Forward your spurious
            emails to : <br /><br/>
            <b>spam@coednssecurity.in</b>
          </h3>
        </div>
          <br />
        </div>
          <div className="col-xs-12 col-sm-12"> 
            <Card id="mainrender" className="search box section-title" sx={{ minWidth: 275, height:310,minHeight:350 ,backgroundColor: 'transparent'}}>
              <CardContent>
                <h2 style={{fontSize:"23px"}}>
                  Report Malicious Domain/URL
                </h2>
                <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '60ch' },
                      minWidth: 275,
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField 
                    label="Please Enter your Domain" 
                    id="outlined-size-normal" 
                    variant="outlined"
                    inputRef={testInput}
                    onChange={inpFun}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    />
                  </Box>
              </CardContent>
              <Box>
                <Stack spacing={2} direction="row" justifyContent={"center"}>   
                      <Button 
                      variant="outlined" 
                      size="medium" 
                      onClick={maliciousfun}>Submit</Button>
                      <Button 
                      variant="outlined" 
                      size="medium"
                      color="error" 
                      onClick={Resetbtn}>Reset</Button>
                </Stack> 
              </Box>
              <br/>
              <Box>
                <Typography sx={{ color: "#7ab317", fontSize: 18 }}>{resp}</Typography>    
              </Box>
            </Card>
            </div>
          </div>
      </div>    
  );
};
