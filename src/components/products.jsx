import React from "react";
import rl from "../images/rl.png"
export const Products = (props) => {
  return (
    <div id="products" className="text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>Brochures</h2>
        </div>
      
        <div>
        <h3>Manuals</h3>
        <br />
        <table>
          <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Download</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>
            InTrust - Asset monitoring and Vulnerability Assessment
            </td>
            <td>
              <a href="pdf/Instruct.pdf" target="_blank"> 
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
            Rakshak - a safe, secure and protective Enterprise DNS
            </td>
            <td>
              <a  href="pdf/RakshakDNS-Brochure.pdf" target="_blank" >
                Click here
              </a>
            </td>
          </tr>
          {/* <tr>
            <td>3</td>
            <td>
              Email Safeness Scorer
            </td>
            <td>
            </td>
          </tr> */}
        
          </tbody>
        </table>
        <br />
       
        </div>
        <br/>
        <br />
        
        
       
       
      </div>

        <div  style={{
        background: 'linear-gradient(to right, #00467F, #A5CC82)',
        height: '600px',
       
         boxShadow: '0px 4px 10px rgba(146, 141, 141, 0.9)',
        margin :"120px"
      }}>

                <div >
                <h2 
                             style={{
                                     padding: "25px",
                                     color: "white",
                                     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" 
                                     }}
                     >
                               Rakshak DNS
                </h2>
                </div>

                <div style={{display:"flex",justifyContent :"center",alignItems:"center"}}>

                           <div style={{marginRight:'60px'}}>
                            <img src={rl} height="130px"></img>

                           </div> 
                           <div >
                            <p style={{color:"white",fontSize:"30px", fontFamily:"sans-serif"}}> A safe, secure, protective, enterprise</p>
                            <p style={{color:"white",fontSize:"30px"}}> DNS with built in threat intelligence</p>



                           </div>
                      
                </div>

                

        </div>



      <br/>
        
    </div>
  );
};
