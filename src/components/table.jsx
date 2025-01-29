import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import cross from "../images/cross.png";
import tick from "../images/rightTick.png";
import upArrow from "../images/upnew3.png";
import downArrow from "../images/downnew.png";
import "./table.css";

export const BasicTable = (props) => {
  const { data } = props;
  const { newarray = [], domainptrvalidData = {}, inputDomain } = data;
  //console.log(newarray);
  let dName,
    dIPv4 = [],
    dIPv6 = [],
    nIPv4 = [],
    nIPv6 = [],
    dReverselookUp = JSON.stringify(domainptrvalidData);
  //dReverselookUp = dReverselookUp.replace(/[{}]/g, "").replace(/[\[\]']+/g, "");
  //console.log(domainptrvalidData);
  newarray.map((obj1) => {
    let temp6 = [],
      temp4 = [];
    obj1.domainip.forEach((element) => {
      if (element.includes(":")) {
        temp6.push(element);
        dIPv6 = temp6.filter((ele, pos) => {
          return temp6.indexOf(ele) === pos;
        });
      } else {
        temp4.push(element);
        dIPv4 = temp4.filter((ele, pos) => {
          return temp4.indexOf(ele) === pos;
        });
      }
    });
    return (dName = obj1.domainname), dIPv4, dIPv6;
  });
  //console.log(dIPv4);

  let data1 = [];
  let data2 = [];
  for(let i=0; i<domainptrvalidData.length;i++){
    let p = domainptrvalidData[i];
    for( var key in p){
      if(domainptrvalidData[i].hasOwnProperty(key)){
        data1.push(key);
        data2.push(p[key]);
      }
    }
  } 
  //console.log(data1); 
  //console.log(data2);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
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
  var combinedArry = data1.map((ip,val,a)=>{ return {Key:ip, Value: data2[val]};});
  //console.log(combinedArry);

  function Dnssec(props) {
    const { row } = props;
    return (
      <div>
        <Typography gutterBottom component="div">
          <b>DNSSEC</b>
        </Typography>
        <Table size="small" aria-label="purchases">
          <TableHead sx={{ backgroundColor: "#C4E0E5" }}>
            <TableRow>
              <TableCell>RR Set Size Check</TableCell>
              <TableCell>RR Sign Validity</TableCell>
              <TableCell>Consistency in Delegation Signing Records</TableCell>
              <TableCell>DS record & KSK match</TableCell>
              <TableCell>DNSKEY record consistency</TableCell>
              <TableCell>DNSSEC strength</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={row.nameservers}>
              <TableCell component="th" scope="row">
                {Imagereturn(row.rrsetsizecheck)}
              </TableCell>
              <TableCell>{Imagereturn(row.rrsignvalidity)}</TableCell>
              <TableCell>
                {Imagereturn(row.delegationsignconsistency)}
              </TableCell>
              <TableCell>{Imagereturn(row.dsksmatch)}</TableCell>
              <TableCell>{Imagereturn(row.dnskeyconsistency)}</TableCell>
              <TableCell>{Imagereturn(row.dnsalgostrength)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    //console.log(row);
    let nsip1=[];
    let nsip2=[];
    let p = row.nameserverptrvalidresponse;
    for( var key in p){
      if(row.nameserverptrvalidresponse.hasOwnProperty(key)){
        nsip1.push(key);
        nsip2.push(p[key]);
      }
    }
    var combinedArryns = nsip1.map((ip,val,a)=>{ return {Key:ip, Value: nsip2[val]};});
    //console.log(combinedArryns);
    return (
      <React.Fragment>
        <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <StyledTableCell component="th" scope="row" align="center">
            {row.nameserver}
          </StyledTableCell>
          <StyledTableCell align="right">More Info</StyledTableCell>
          <StyledTableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </StyledTableCell>
        </StyledTableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography gutterBottom component="div" align="center">
                  {row.nameserveripstatus.forEach((element) => {
                    let t4 = [],
                      t6 = [];
                    if (element.includes(":")) {
                      t6.push(element);
                      nIPv6 = t6.filter((ele, pos) => {
                        return t6.indexOf(ele) === pos;
                      });
                    } else {
                      t4.push(element);
                      nIPv4 = t4.filter((ele, pos) => {
                        return t4.indexOf(ele) === pos;
                      });
                    }
                    return nIPv4, nIPv6;
                  })}
                  <b>NameServer IPv4:</b> <i>{nIPv4.length == 0 ?<b>Nil</b>:nIPv4}</i>
                </Typography>
                <Typography align="center">
                  <b>NameServer IPv6:</b> <i>{nIPv6.length == 0 ?<b>Nil</b>:nIPv6}</i>
                </Typography>
                <Box id="nstable"
                      sx={{
                        fontSize: 15,
                        letterSpacing: "1px",
                        color: "GrayText",
                      }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th style={{textAlign:"center"}}>Nameserver IP addresses</th>
                            <th style={{textAlign:"center"}}>Nameserver IP Lookup Validations</th>
                          </tr>
                        </thead>
                        <tbody>   
                          { combinedArryns.map((item) => (
                              <tr>
                                <td style={{textAlign:"center"}}>{item.Key}</td>
                                <td style={{textAlign:"center"}}>{Imagereturn(item.Value)}</td>
                              </tr>  
                              ))
                          }                    
                        </tbody>
                      </table>
                    </Box>
                <br />
                <Table size="small" aria-label="purchases">
                  <TableHead sx={{ backgroundColor: "#C4E0E5" , border:"hidden"}}>
                    <TableRow>
                      <TableCell>UDPv4</TableCell>
                      <TableCell>UDPv6</TableCell>
                      <TableCell>TCPv4</TableCell>
                      <TableCell>TCPv6</TableCell>
                      <TableCell>EDNS Support</TableCell>
                      <TableCell>Availability</TableCell>
                      <TableCell>SOA Check</TableCell>
                      <TableCell>Authoritative Answer</TableCell>
                      <TableCell>Zone Transfer Check</TableCell>
                      <TableCell>Recursion Disallowed</TableCell>
                      <TableCell>NSEC3 Enabled</TableCell>
                      <TableCell>Software Abstraction</TableCell>
                      <TableCell>Reverse Lookup Nameserver</TableCell>
                      <TableCell>Reverse Lookup Domain</TableCell>
                      <TableCell>Resource Record Setmatch</TableCell>
                      <TableCell >Round Trip Time (in milliSeconds)</TableCell>
                      <TableCell>DNSSEC</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={row.nameserver}>
                      <TableCell component="th" scope="row">
                        {Imagereturn(row.udpv4)}
                      </TableCell>
                      <TableCell>{Imagereturn(row.udpv6)}</TableCell>
                      <TableCell>{Imagereturn(row.tcpv4)}</TableCell>
                      <TableCell>{Imagereturn(row.tcpv6)}</TableCell>
                      <TableCell>{Imagereturn(row.edns_status)}</TableCell>
                      <TableCell>{Imagereturn(row.avail_status)}</TableCell>
                      <TableCell>{Imagereturn(row.soaserial_status)}</TableCell>
                      <TableCell>{Imagereturn(row.AA_status)}</TableCell>
                      <TableCell>{Imagereturn(row.zt_status)}</TableCell>
                      <TableCell>{Imagereturn(row.rq_status)}</TableCell>
                      <TableCell>{Imagereturn(row.nsec3_status)}</TableCell>
                      <TableCell>{Imagereturn(row.sobs_status)}</TableCell>
                      <TableCell>
                        {Imagereturn(row.nameserverptr_status)}
                      </TableCell>
                      <TableCell>{Imagereturn(row.domainptr_status)}</TableCell>
                      <TableCell>{Imagereturn(row.PCstatus)}</TableCell>
                      <TableCell>{imageTrend(row.trend)}{row.rtt}({row.trend == "downward" ? (-row.absrtt) : row.rtt_status == -1 ? "NA" : ("+"+row.absrtt)})</TableCell>
                      <TableCell>{Imagereturn(row.dnssec_status)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <br />
                {row.dnssec_status === "pass" ? (
                  <Dnssec key={row.nameserver} row={row} />
                ) : null}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div className="base">
      {newarray.length > 0 ? (
        <div className="textcontainer">
          <div
            className="textLine"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "60px",
            }}
          >
            <Box
              sx={{
                fontSize: 15,
                letterSpacing: "1px",
                color: "GrayText",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop:"30",
              }}
            >
              <b>Submitted URL :</b> {inputDomain}
            </Box>
            <Box
              sx={{
                fontSize: 15,
                letterSpacing: "1px",
                color: "GrayText",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <b>Domain name :</b> {dName}
            </Box>
            <Box
              sx={{
                fontSize: 15,
                letterSpacing: "1px",
                color: "GrayText",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <b>Domain IPv4 address :</b>{" "}
              { dIPv4.length == 0 ?<b>Nil</b> : JSON.stringify(dIPv4).replace(/["[\[\]']+/g, "")}
            </Box>
            <Box
              sx={{
                fontSize: 15,
                letterSpacing: "1px",
                color: "GrayText",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <b>Domain IPv6 address :</b>{" "}
              { dIPv6.length == 0 ?<b>Nil</b> : JSON.stringify(dIPv6).replace(/["[\[\]']+/g, "")}
            </Box>
            <Box
              sx={{
                fontSize: 15,
                letterSpacing: "1px",
                color: "GrayText",
              }}
              key="item.Key"
            >
             <TableContainer id="dlookup"
                sx={{
                  maxWidth: 1800,
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontSize: "15px",
                  alignContent:"center"
                }}
              >
              <table className="center">
                <thead>
                  <tr>
                    <th style={{textAlign:"center"}}>Domain IP addresses</th>
                    <th style={{textAlign:"center"}}>Domain Reverse Lookup status</th>
                  </tr>
                </thead>
                <tbody>   
                  {combinedArry.map((item) => (
                      <tr>
                        <td style={{textAlign:"center"}}>{item.Key}</td>
                        <td style={{textAlign:"center"}}>{Imagereturn(item.Value)}</td>
                      </tr>  
                      ))
                  }                    
                </tbody>
              </table>
            </TableContainer>
            </Box>
          </div>
          <br />
          <TableContainer
            component={Paper}
            sx={{
              maxWidth: 1800,
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "15px",
            }}
          >
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Name Servers</StyledTableCell>
                  <StyledTableCell align="right">Details</StyledTableCell>
                  <StyledTableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {newarray.map((row) => (
                  <Row key={row.nameserver} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : null}
      <br />
      <br />
    </div>
  );
};
