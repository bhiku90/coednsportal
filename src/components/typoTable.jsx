import * as React from "react";
import cross from "../images/cross.png";
import tick from "../images/rightTick.png";
import upArrow from "../images/upnew2.png";
import downArrow from "../images/down.png";
import "./table.css";

export const TypoTable = (props) => {
  const { data } = props;
  const { typoData = [], inputDomain} = data;
  //console.log(TypoData);

  let val = Object.values(typoData).map(item =>{
       //console.log(item);
       return item;
     });
     //console.log(val);
  const Imagereturn = (props) => {
    if (props === "Original")
      return (
        <div>
          <img src={tick} width="56" height="45" />
        </div>
      );
    else if(props === "unknown")
      return (
        <div>
          <img src={cross} width="56" height="45" />
        </div>
      );
      else {
        return (
            <div>
              <img src={cross} width="56" height="45" />
            </div>
          );
      }
  };        
  const Classficationreturn = (props) => {
    if (props === "Original")
      return (
        <div>
          <p style={{ color: "green" }}>{props}</p>
        </div>
      );
    else if(props === "unknown")
      return (
        <div>
          <p style={{ color: "red" }}>{props}</p>
        </div>
      );
      else {
        return (
            <div>
              <p style={{ color: "red" }}>{props}</p>
            </div>
          );
      }
  };        
    return (
      <React.Fragment>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        <div className="container">
          <div className="table-responsive">
            {/* <h2>Striped Rows</h2>
            <p>The .table-striped class adds zebra-stripes to a table:</p>*/}
        {val.length > 0 ? (
            <table className="table table-striped">
                <thead style={{border: "1px groove darkgray"}}>
                    <tr>
                    <th style={{ textAlign: "center" }}>Domain</th>  
                     <th style={{ textAlign: "center" }}>Type</th>
                    <th style={{ textAlign: "center" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{ textAlign: "center" }}>{typoData.domain}</td>  
                    <td style={{ textAlign: "center" }}>{Classficationreturn(typoData.status)}</td>
                    <td style={{ textAlign: "center" }}>{Imagereturn(val[1])}</td>
                    </tr>
                </tbody>
            </table>
            ): null}
          </div>
        </div>
      </React.Fragment>
    );
  
};
