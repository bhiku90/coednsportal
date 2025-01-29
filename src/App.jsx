import React from "react";
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { ResearchTopics } from "./components/researchTopics";
import { About } from "./components/about";
import { Training } from "./components/training";
import { PublicDnsServer } from "./components/publicDNSserver";
import { SpamBox } from "./components/spambox";
import { Publications } from "./components/publications";
import { Resources } from "./components/resources";
import { Products } from "./components/products";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Toolslanding } from "./components/toolslanding";
import { Malicious } from "./components/malicious";
import { MalTable } from "./components/maliciousTable";
import { BasicTable } from "./components/table";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Typo } from "./components/typo";
import { TypoTable } from "./components/typoTable";
import axios from "axios";
import { Punny } from "./components/punny";
import { PunnyTable } from "./components/punnyTable";
import { Punyconverter } from "./components/punyconverter";
import { PunyconverterTable } from "./components/punyconverterTable";
import { D3Map } from "./components/d3map";
import { Top25 } from "./components/top25";
import Top25Landing from "./components/top25landing";
import { Login } from "./components/Login";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
    const [ip, setIp] = useState('');
    useEffect(() => {
      const fetchIP = async () => {
        try {
          const response = await axios.get('https://api.ipify.org?format=json');
          const fetchedIp = response.data.ip;
          setIp(fetchedIp);
          //Makeing the post request after setting the IP
          await axios.post("http://localhost:9090/webvisitcount", {
            userIp: fetchedIp
          });
        } catch (error) {
          console.error('Error fetching IP address or posting visit count:', error);
        }
      };
    
      fetchIP();
    }, []);
    
    
  //console.log("feched ip value ----", ip);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const [data, setData] = useState("");
  const [Maldata, setMalData] = useState("");
  const [Typodata, setTypoData] = useState("");
  const [Punnydata, setPunnyData] = useState("");
  const [Punyconverterdata, setPunyconverterData] = useState("");
  const [navTool, setNavTool] = useState("");
  const [landingPageData, setLandingPageData] = useState({});
  const [enableMap, setEnableMap] = useState(false);

  const checkSession = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session && session.loggedIn) {
      const currentTime = new Date().getTime();
      if (currentTime < session.expiration) {
        // Session is valid
        setEnableMap(true);
      } else {
        // Session has expired
        localStorage.removeItem("session");
        setEnableMap(false);
        routeTool("signup");
        document.getElementById("menu").style.display = "block";
      }
    } else {
      // No session found
      setEnableMap(false);
      //routeTool("signup");
      document.getElementById("menu").style.display = "block";
    }
  };

  // Call this function on component mount or when checking session validity
  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      checkSession();
    }, 1000 * 60); // Check every 1 minute

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const setDataInTable = (data) => {
    setData(data || "");
  };

  const setDataInMalTable = (Maldata) => {
    setMalData(Maldata || "");
  };

  const setDataInTypoTable = (Typodata) => {
    setTypoData(Typodata || "");
  };
  const setDataInPunnyTable = (Punnydata) => {
    setPunnyData(Punnydata || "");
  };
  const setDataInPunyconverterTable = (Punyconverterdata) => {
    setPunyconverterData(Punyconverterdata || "");
  };
  const routeTool = (val) => {
    setNavTool(val);
  };

  return (
    <div>
      <Navigation routeTool={routeTool} />
      {navTool == "start1" ? (
        <>
          <Toolslanding setDataInTable={setDataInTable} />
          <BasicTable data={data} />
        </>
      ) : navTool === "start" ? (
        <>
          <Malicious setDataInMalTable={setDataInMalTable} />
          <MalTable data={Maldata} />
        </>
      ) : navTool === "start2" ? (
        <>
          <Typo setDataInTypoTable={setDataInTypoTable} />
          <TypoTable data={Typodata} />
        </>
      ) : navTool === "start3" ? (
        <>
          <Punny setDataInPunnyTable={setDataInPunnyTable} />
          <PunnyTable data={Punnydata} />
        </>
      ) : navTool === "start4" ? (
        <>
          <Punyconverter
            setDataInPunyconverterTable={setDataInPunyconverterTable}
          />
          <PunyconverterTable data={Punyconverterdata} />
        </>
      ) : navTool === "start25" ? (
        <>
          <Top25 />
        </>
      ) : navTool === "start26" ? (
        <>
          <Top25Landing />
        </>
      ) : navTool === "signup" ? (
        <>
          {enableMap ? (
            <D3Map routeTool={routeTool} setEnableMap={setEnableMap} />
          ) : (
            <Login routeTool={routeTool} setEnableMap={setEnableMap} />
          )}
        </>
      ) : navTool === "vmap" ? (
        <>
          {enableMap && (
            <>
              <D3Map routeTool={routeTool} setEnableMap={setEnableMap} />
            </>
          )}
        </>
      ) : (
        <div>
          <Header data={landingPageData.Header} />

          <div data-aos="zoom-out-right">
            <About data={landingPageData.About} />
          </div>
          <div data-aos="zoom-out-left">
            <ResearchTopics data={landingPageData.ResearchTopics} />
          </div>

          <Training data={landingPageData.Training} />

          <div data-aos="zoom-in-left">
            <PublicDnsServer />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <SpamBox />
          </div>

          {/* <div>
                <D3Map/>
            </div> */}

          <div data-aos="zoom-out-right">
            <Publications data={landingPageData.Publications} />
          </div>
          <div data-aos="zoom-out-up">
            <Resources data={landingPageData.Resources} />
          </div>
          <div data-aos="zoom-out-up">
            <Products data={landingPageData.Resources} />
          </div>
          <div data-aos="zoom-out-down">
            <Contact data={landingPageData.Contact} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
