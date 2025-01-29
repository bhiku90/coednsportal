import * as React from "react";
import cross from "../images/cross.png";
import tick from "../images/rightTick.png";
import upArrow from "../images/upnew2.png";
import downArrow from "../images/down.png";
import "./table.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PunyconverterTable = (props) => {
  const { data } = props;
  const { ascllval = "", unival = "", inputDomain } = data;

//console.log(ascllval);
//console.log([data]);
    return (
      <React.Fragment>
          <br/>
        <div className="container">
          <div className ="table-responsive">
          { data ? (
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
              {/* <b style={{ fontSize:"18px" }}>Submitted Value :</b>{inputDomain} */}
            </Box>
                </div>
              </div>
            </div>
             ): null}
            <br/>
            {/* <h2>Striped Rows</h2>
            <p>The .table-striped class adds zebra-stripes to a table:</p>*/}
       { data ? ( 
          <table className="table table-striped">
                <thead style={{border: "0px groove darkgray"}}>
                    <tr>
                      <th style={{ textAlign: "center" }}>UniCode Representation</th>  
                      <th style={{ textAlign: "center" }}>ASCII Representation</th>  
                    </tr>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                      <tr>
                        <td>{unival}</td>
                        <td>{ascllval}</td>
                      </tr>
                </tbody>
            </table>
        ): null}
          </div>
        </div>
      </React.Fragment>
    );
};