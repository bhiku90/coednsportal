import ParticlesBg from "particles-bg";
import LogoBlack from "../images/LogoBlack.png";
import {useState} from "react";

export const Header = (props) => {

  

  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="color"
          bg={{ zIndex: 0, position: "absolute", top: 0 }}
        />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  <img
                    src={LogoBlack}
                    alt="DNS logo"
                    width="80%"
                    height="auto"
                  />
                  <span></span>
                </h1>
                <br />
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
              ABOUT US
                 
                </a>
              </div> </div>
              
              {/* <div className="btn-custom-div">
                <br></br>
                <br></br>
                
              <a href="maldomain.html" className="btn btn-custom-prod">
                  Malicious <br></br> Domain Detection
                </a>{" "}

                <a href="#about" className="btn btn-custom-prod">
                  RAKSHAK <br></br> DNS
                </a>{" "}

                <a href="#about" className="btn btn-custom-prod">
                  DNS HEALTH <br></br> MEASUREMENT
                </a>{" "}
                
                <a href="emailsec.html" className="btn btn-custom-prod">
                  EMAIL <br></br> SAFENESS
                </a>{" "}

              </div> */}

          </div>
        </div>
      </div>
    </header>
  );
};
