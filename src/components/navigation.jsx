import React, { useState } from "react";
import LogoBlue from "../images/LogoBlue.png";
import NIXI from "../images/small-nixi.png";
import "../override.css";

export const Navigation = ({ routeTool }) => {
  const [colorChange, setColorchange] = useState(false);
  const h=window.innerWidth;

  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      id="menu"
      className={
        colorChange
          ? "navbar navbar-default-color navbar-fixed-top"
          : "navbar navbar-default navbar-fixed-top"
      }
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            style={{ border: "hidden" }}
          >
            {" "}
            <span className="sr-only"></span>
            <span
              className="icon-bar"
              style={{ backgroundColor: "#758283" }}
            ></span>{" "}
            <span
              className="icon-bar"
              style={{ backgroundColor: "#758283" }}
            ></span>{" "}
            <span
              className="icon-bar"
              style={{ backgroundColor: "#758283" }}
            ></span>{" "}
          </button>
          <div className="logo-container">
          <a href="#header" onClick={() => routeTool("")} className="dns-logo-mobile">
              <img src={LogoBlue} alt="DNS logo" width="100" height="40" className="dns-logo-mobile"/>
            </a>  &emsp; &emsp; &emsp; &emsp;  
            <a href="https://nixi.in/" target="_blank" className="nixi-logo-mobile">
              <img src={NIXI} alt="NIXI logo" width="100" height="40" className="nixi-logo-mobile"/>
            </a>
          </div>
        </div>

        <div
          className="collapse navbar-collapse navbar-custom-container"
          id="bs-example-navbar-collapse-1"
        >
          <div className="navbar-container">
            <a href="#header" onClick={() => routeTool("")} className="dns-logo-a">
              <img src={LogoBlue} alt="DNS logo" width="170" height="60" className="dns-logo-img"/>
            </a>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#about"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                  style={{color: "#FB577C"}}
                  
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#researchTopics"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
               
                >
                  Research
                </a>
                
              </li>
              <li>
                <a
                  href="#products"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                  style={{color: "#FB577C"}}
                >
                  products
                </a>
                
              </li>
              <li>
                <a
                  href="#training"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                >
                  Training
                  {/* <sup className="animate-charcter" style={{marginLeft:"5px"}}>New</sup> */}
                </a>
              </li>
              <li className="dropdown" style={{overflowX: "initial"}}>
                <a
                  href="#"
                  className="dropdown-toggle page-scroll nav-item"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  style={{color: "#FB577C"}}
                >
                  Tools
                  <b className="caret" style={{marginLeft: "5px"}}></b>
                </a>
                <ul className="dropdown-menu nav">
                  <li>
                    <a
                      href="#dnshealth"
                      onClick={() => routeTool("start1")}
                      style={{color: "#555"}}
                    >
                      DNS Health Analyzer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#malicious"
                      onClick={() => routeTool("start")}
                      style={{color: "#555"}}
                    >
                      Malicious Domain Checker
                    </a>
                  </li>
                  <li>
                    <a
                      href="#typo"
                      onClick={() => routeTool("start2")}
                      style={{color: "#555"}}
                    >
                      TypoSquatting Checker
                    </a>
                  </li>
                  <li>
                    <a
                      href="#puny"
                      onClick={() => routeTool("start3")}
                      style={{color: "#555"}}
                    >
                      Domain Punycode Identifier
                    </a>
                  </li>
                  <li>
                    <a
                      href="#punnyconverter"
                      onClick={() => routeTool("start4")}
                      style={{color: "#555"}}
                    >
                      Punycode converter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => routeTool("start26")}
                      style={{color: "#555"}}
                    >
                      Health Report of Top Name Server
                    </a>
                  </li>
                  {/* <li><a href="#" onClick={() => routeTool("start25")} style={{color:"#555"}}>Health Report of Top 25 nameservers accessed across World</a></li> */}
                </ul>
              </li>
              <li>
                <a
                  href="#pds"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                >
                  Public DNS Server
                </a>
              </li>
              <li>
                <a
                  href="#spambox"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                  style={{color: "#FB577C"}}
                >
                  Spam Box
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                  style={{color: "#FB577C"}}
                >
                  Resources
                </a>
              </li>
              {/* <li className="page-scroll nav-item">
              <a href="https://www.coednssecurity.in/icire/" onClick={() => routeTool("")}>
                Conference<sup className="animate-charcter" style={{marginLeft:"5px"}}>New</sup>
              </a>
            </li> */}
              
              <li>
                <a
                  href="#contact"
                  className="page-scroll nav-item"
                  onClick={() => routeTool("")}
                  
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a  className="page-scroll nav-item" 
                    href="#login" 
                    onClick={() => routeTool("signup")}
                     style={{color: "#FB577C"}}>
                  Admin Login
                </a>
              </li>
            </ul>
            <a href="https://nixi.in/" target="_blank" className="nixi-logo-a">
              <img src={NIXI} alt="NIXI logo" width="150" height="50" className="nixi-logo-img"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
