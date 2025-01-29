import * as React from "react";
import cross from "../images/cross.png";
import tick from "../images/rightTick.png";
import upArrow from "../images/upnew2.png";
import downArrow from "../images/down.png";
import "./table.css";

export const MalTable = (props) => {
  const { data } = props;
  const { malData = [], inputDomain} = data;
  //console.log(malData);
  

  let val = Object.values(malData).map(item =>{
      // console.log(item);
       return item;
     });
     //console.log(val);
  const Imagereturn = (props) => {
    if (props === "benign")
      return (
        <div>
          <img src={tick} width="56" height="45" />
        </div>
      );
    else if(props === "malicious")
      return (
        <div>
          <img src={cross} width="56" height="45" />
        </div>
      );
      else {
        return <></>;
      }
  };        
  const Classficationreturn = (props) => {
    if (props === "benign")
      return (
        <div>
          <p style={{ color: "green" }}>Non-malicious</p>
        </div>
      );
    else if(props === "malicious")
      return (
        <div>
          <p style={{ color: "red" }}>Malicious</p>
        </div>
      );
      else {
        return <></>;
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
                    <th style={{ textAlign: "center" }}>Classification</th>  
                    <th style={{ textAlign: "center" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style={{ textAlign: "center" }}>{val[0]}</td>  
                    <td style={{ textAlign: "center" }}>{Classficationreturn(val[1])}</td>  
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
