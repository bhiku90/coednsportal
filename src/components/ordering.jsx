import React, { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import cross from "../images/cross.png";
import tick from "../images/rightTick.png";
import upArrow from "../images/upnew3.png";
import downArrow from "../images/downnew.png"

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


let apiData=[];

export const ORDER = () => {
    const [apiResp, setApiResp] = useState([]);
    

    useEffect(() => {
      showData();
      }, []);

const showData = async()=> {
    apiData = await axios.get("https://coednssecurity.in/healthmediator/ordering", {   
    }).then((response) => {
        //console.log(response.data);
        if (response.status == 200 && Object.keys(response.data).length !== 0) {
          return response.data.healthindexusa;
        }
        else {
          return {};
        }    
      }).catch((error)=>{
        console.log(error);
        return{};
      })

      if (!Array.isArray(apiData) || apiData.length === 0) {
        return <div>Baba ne band kiya hai.</div>;
      }
      const uniqueNameservers = new Map();
      const nicuniName = new Map();
      apiData.forEach(item => {
        const domain = Object.keys(item)[0];
        item[domain].forEach(nsItem => {
          const ns = Object.keys(nsItem)[0];
          const score = nsItem[ns][0];
          const details = nsItem[ns][1];
          //console.log(details);
          
            if(domain=="india.gov.in"){ 
              //console.log(trend);
              if (!nicuniName.has(ns) && score !== 0) {
                nicuniName.set(ns, { domain, ns, score, ...details });
                //console.log(domain,ns,score,details.trend);
              }
            } else {
              const ns = Object.keys(nsItem)[0];
              const score = nsItem[ns][0];
              const details = nsItem[ns][1];
              //console.log(udpv6);
              
              if (!uniqueNameservers.has(ns) && score !== 0) {
                uniqueNameservers.set(ns, { domain, ns, score, ...details });
              }

            }
        });
      });
      
      let nicdata = Array.from(nicuniName.values());
      let sortedData1 = Array.from(uniqueNameservers.values()).slice(0,27-nicuniName.size);
      setApiResp(sortedData1);
    } 
    
    const onScoreSortasd = () => {
      const sortedData = [...apiResp];
      sortedData.sort((a, b) => {
        return a.score - b.score;
      });
      setApiResp(sortedData);
    };
    const onScoreSortdes = () => {
      const sortedDatades = [...apiResp];
      sortedDatades.sort((a, b) => {
        return b.score - a.score;
      });
      setApiResp(sortedDatades);
    };
    const onRttSortasd = () => {
      const sortedData = [...apiResp];
      sortedData.sort((a, b) => {
        return a.rtt - b.rtt;
      });
      setApiResp(sortedData);
    };
    const onRttSortdes = () => {
      const sortedData = [...apiResp];
      sortedData.sort((a, b) => {
        return b.rtt - a.rtt;
      });
      setApiResp(sortedData);
    };

    
      const timeInfo = apiData.find(item => Object.keys(item)[0] === 'time');
      const time = timeInfo ? timeInfo.time[0] : '';
      //console.log(apiResp)


      const Imagereturn = (props) => {

        if (props === "pass")
          return (
            <div>
              <img src={tick} width="56" height="45" />
            </div>
          );
        else
          return (
            <div>
              <img src={cross} width="56" height="45" />
            </div>
          );
      };
      
      const imageTrend = (props) => {
      if (props === "upwards")
        return (
          <>
            <img src={upArrow} width="40" height="40" />
          </>
        );
      else if (props === "downward")
        return (
          <>
            <img src={downArrow} width="40" height="60" />
          </>
        );
      else {
        return <></>;
      }
        
      };

  

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  //console.log(row.rtt)
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

        <TableCell align="center" component="th" scope="row">{row.ns}</TableCell>
        <TableCell align="center">{row.score}</TableCell>
        <TableCell align="center">{imageTrend(row.trend)}{row.rtt} ({row.trend == "downward" ? (-row.absrtt) : row.rtt_status == -1 ? "NA" : ("+"+row.absrtt)})</TableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead sx={{ backgroundColor: "#D0EDDB" , border:"hidden"}}>
                  <TableRow>
                    <TableCell align="center">Availability</TableCell>
                    <TableCell align="center">TCPv4</TableCell>
                    <TableCell align="center">TCPv6</TableCell>
                    <TableCell align="center">UDPv4</TableCell>
                    <TableCell align="center">UDPv6</TableCell>
                    <TableCell align="center">Software Abstraction</TableCell>
                    <TableCell align="center">Zone Transfer Check</TableCell>
                    <TableCell align="center">Recursion Disallowed</TableCell>
                    <TableCell align="center">Round Trip Time (in milliSeconds)</TableCell>
                    <TableCell align="center">DNSSEC</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow key={row.ns}>
                      <TableCell component="th" scope="row" align="center">{Imagereturn(row.availability)}</TableCell>
                      <TableCell align="center">{Imagereturn(row.tcpv4)}</TableCell>
                      <TableCell align="center">{Imagereturn(row.tcpv6)}</TableCell>
                      <TableCell align="center">{Imagereturn(row.udpv4)}</TableCell>
                      <TableCell align="center">{Imagereturn(row.udpv6)}</TableCell>
                      <TableCell align="center">{Imagereturn(row.sobs)}</TableCell>
                      <TableCell align="center">{Imagereturn(row.zt)}</TableCell>
                      <TableCell align="center">{Imagereturn(row.rq)}</TableCell>
                      <TableCell align="center">{imageTrend(row.trend)}{row.rtt} ({row.trend == "downward" ? (-row.absrtt) : row.rtt_status == -1 ? "NA" : ("+"+row.absrtt)})</TableCell>
                      <TableCell align="center">{Imagereturn(row.dnssec)}</TableCell>
                    </TableRow>
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


  return (
    <div className="textcontainer">
            <div className="section-title text-center">
                 <h2 style={{color:"#fff"}}>NameServers used by popular Food Delivery Apps</h2>
                 <h3 style={{color:"#fff"}}>as of  {time} Hours</h3>
            </div>
    <TableContainer component={Paper}
    sx={{
      maxWidth: 1800,
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "15px",
    }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{backgroundColor:"#000000"}}>
            <TableCell align="center" sx={{color:"white"}}>NameServers</TableCell>
            <TableCell align="center" sx={{color:"white"}}>Health Score Out of 9 <ArrowUpwardIcon sx={{marginBottom:"-5"}} onClick={onScoreSortasd} /><ArrowDownwardIcon sx={{marginBottom:"-5"}} onClick={onScoreSortdes}/></TableCell>
            <TableCell align="center" sx={{color:"white"}}>Average RTT&nbsp;(in ms)<ArrowUpwardIcon sx={{marginBottom:"-5"}} onClick={onScoreSortasd} /><ArrowDownwardIcon sx={{marginBottom:"-5"}} onClick={onScoreSortdes}/></TableCell>
            <TableCell align="center"/>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiResp.map((row) => (
            <Row key={row.ns} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};