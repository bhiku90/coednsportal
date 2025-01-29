import * as React from "react";
import cross from "../images/cross.png";
import tick from "../images/rightTick.png";
import upArrow from "../images/upnew2.png";
import downArrow from "../images/down.png";
import "./table.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PunnyTable = (props) => {
  const { data } = props;
  const { punnyDataRespStatus = [], punnyDataRespDomain = [], inputDomain} = data;


  let val = Object.values(punnyDataRespStatus).map(item =>{
       //console.log(item);
       let strArr = item.split(',');
       //console.log(strArr); 
       return item,strArr;
     });
    //console.log(val);
    
    const tdData =() =>{
        return(  
        val.map((va)=>{
          //console.log(va);
          return ( <tr key={va}>
                  {
                  va.map((v)=> {
                    return <td key={v}>{v}</td> 
                      })
                  }
            </tr> 
          )
          }) 
                
        )          
      }  
    return (
      <React.Fragment>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div className="container">
          <div className="table-responsive">
          { val.length > 0 ? (
            <div className="base">
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
              <b style={{ fontSize:"18px" }}>Domain Name :</b> {punnyDataRespDomain}
            </Box>
                </div>
              </div>
            </div>
            ): null}
            <br/>
            {/* <h2>Striped Rows</h2>
            <p>The .table-striped class adds zebra-stripes to a table:</p>*/}
        { val.length > 0 ? (
          <table className="table table-striped">
                <thead style={{border: "0px groove darkgray"}}>
                    <tr>
                      <th style={{ textAlign: "center" }}>ASCII Representation</th>  
                      <th style={{ textAlign: "center" }}>Punycode Domains</th>  
                    </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                      {tdData()}
                </tbody>
            </table>
            ): null}
          </div>
        </div>
      </React.Fragment>
    );
};
