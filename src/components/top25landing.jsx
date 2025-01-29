import React, { useState, useRef } from 'react'
import { Top25 } from './top25';
import { Top25World } from './top25world';
import { Top25Canda } from './top25canda';
import { Top25Usa } from './top25usa';
import { Top25Bank } from './top25_bank';
import { UPI } from './upi';
import { Travel } from './travel';
import { Ticket } from './ticket';
import { Result } from './result';
import { OTT } from './ott';
import { ORDER } from './ordering';
import { ESSENTIAL } from './essential';
import { CRYPTO } from './crypto';
import { COURIER } from './courier';
import { BROADBAND } from './broadband';
import { GAMING } from './gaming';
import "./top25landing.css";
import india from "../images/India.png";
import world from "../images/world.png";
import canada from "../images/canda2.png";
import usa from "../images/usa1.png";
import bank from "../images/bank.png";
import upi from "../images/pay.png";
import car from "../images/cartravel.png";
import ticket from "../images/ticket.png";
import result from "../images/result.png";
import ott from "../images/ott.png";
import order from "../images/ordering.png";
import essential from "../images/essential.png";
import crypto from "../images/ca.png";
import courier from "../images/courier.png";
import game from "../images/game.png";
import broadband from "../images/broadband.png";

function Top25Landing() {
    const [isComponentAVisible, setIsComponentAVisible] = useState(false);
    const [isComponentBVisible, setIsComponentBVisible] = useState(false);
    const [isComponentCVisible, setIsComponentCVisible] = useState(false);
    const [isComponentUVisible, setIsComponentUVisible] = useState(false);
    const [isComponentBankVisible, setIsComponentBankVisible] = useState(false);
    const [isComponentUpiVisible, setIsComponentUpiVisible] = useState(false);
    const [isComponentTravelVisible, setIsComponentTravelVisible] = useState(false);
    const [isComponentTicketVisible, setIsComponentTicketVisible] = useState(false);
    const [isComponentResultVisible, setIsComponentResultVisible] = useState(false);
    const [isComponentOttVisible, setIsComponentOttVisible] = useState(false);
    const [isComponentOrderingVisible, setIsComponentOrderingVisible] = useState(false);
    const [isComponentEssentialVisible, setIsComponentEssentialVisible] = useState(false);
    const [isComponentCryptoVisible, setIsComponentCryptoVisible] = useState(false);
    const [isComponentCourierVisible, setIsComponentCourierVisible] = useState(false);
    const [isComponentGamingVisible, setIsComponentGamingVisible] = useState(false);
    const [isComponentBroadbandVisible, setIsComponentBroadbandVisible] = useState(false);

    const ref = useRef(null);



    const handleComponentAClick = () => {
        setIsComponentAVisible(true);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };
    
      const handleComponentBClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(true);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentCClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(true);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentUClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(true);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentBankClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(true);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentUpiClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(true);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentTravelClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(true);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentTicketClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(true);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentResultClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(true);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentOttClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(true);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentOrderClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(true);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentEssentialClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(true);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentCryptoClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(true);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentCourierClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(true);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentGamingClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(true);
        setIsComponentBroadbandVisible(false);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }
      const handleComponentBoadbandClick = () => {
        setIsComponentAVisible(false);
        setIsComponentBVisible(false);
        setIsComponentCVisible(false);
        setIsComponentUVisible(false);
        setIsComponentBankVisible(false);
        setIsComponentUpiVisible(false);
        setIsComponentTravelVisible(false);
        setIsComponentTicketVisible(false);
        setIsComponentResultVisible(false);
        setIsComponentOttVisible(false);
        setIsComponentOrderingVisible(false);
        setIsComponentEssentialVisible(false);
        setIsComponentCryptoVisible(false);
        setIsComponentCourierVisible(false);
        setIsComponentGamingVisible(false);
        setIsComponentBroadbandVisible(true);
        ref.current?.scrollIntoView({behavior: 'smooth'});
      }

  return (
<div id='top'>
    

    
    <div className ="container1 col-xs-12 col-sm-12">
    <div className="col-md-10 col-md-offset-1 section-title text-center" style={{left:"-50",marginBottom:"-30"}}>
          <h2>Health of Popular NameServers Presented Categorically</h2>
    </div>
    
        <div className="card" style={{color:"#009688"}} >
                <div className="img-box" style={{height:"60%"}}>
                        <img src={india}/>
                </div>
            <div className="content">
                <h2>India</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentAClick}>Click here</a>
            </div>
        </div>
        
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box" style={{width:"90%"}}>
                        <img src={world}/>
                </div>
            <div className="content">
                <h2>World</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentBClick}>Click here</a>
            </div>
        </div>

        <div className="card" style={{color:"#009688"}}>
                <div className="img-box" style={{width:"70%"}}>
                        <img src={canada}/>
                </div>
            <div className="content">
                <h2>Canada</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentCClick}>Click here</a>
            </div>
        </div>

        <div className="card" style={{color:"#009688"}}>
                <div className="img-box" style={{width:"95%"}}>
                        <img src={usa}/>
                </div>
            <div className="content">
                <h2>USA</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentUClick}>Click here</a>
            </div>
        </div>
    
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={bank}/>
                </div>
            <div className="content">
                <h2>Banking Websites</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentBankClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box" >
                        <img src={upi}/>
                </div>
            <div className="content">
                <h2>Payment Apps</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentUpiClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={car}/>
                </div>
            <div className="content">
                <h2>Cab Booking Apps</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentTravelClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={ticket}/>
                </div>
            <div className="content">
                <h2>Travel and Transportation Booking Apps</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentTicketClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={result}/>
                </div>
            <div className="content">
                <h2>Examination Authorities</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentResultClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={ott}/>
                </div>
            <div className="content">
                <h2>Entertainment Apps</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentOttClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={order}/>
                </div>
            <div className="content">
                <h2>Food Delivery Apps</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentOrderClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={essential}/>
                </div>
            <div className="content">
                <h2>Daily Essential Services</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentEssentialClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={crypto}/>
                </div>
            <div className="content">
                <h2>Certifying Authorities (CA)</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentCryptoClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={courier}/>
                </div>
            <div className="content">
                <h2>Courier Delivery Services</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentCourierClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={game}/>
                </div>
            <div className="content">
                <h2>Gaming Apps</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentGamingClick}>Click here</a>
            </div>
        </div>
        <div className="card" style={{color:"#009688"}}>
                <div className="img-box">
                        <img src={broadband}/>
                </div>
            <div className="content">
                <h2>Broadband Services</h2>
                {/* <button onClick={()=> setisChange(!ischange)}>toggle</button> */}
                <a onClick={handleComponentBoadbandClick}>Click here</a>
            </div>
        </div>
    <br/>
        
            <div ref={ref}>
                    {
                        isComponentAVisible && <Top25 />
                    }
            
                   { 
                        isComponentBVisible && (<Top25World/>)
                    }
             
                   { 
                        isComponentCVisible && (<Top25Canda/>)
                    }
             
                   { 
                        isComponentUVisible && (<Top25Usa/>)
                    }
                   { 
                        isComponentBankVisible && (<Top25Bank/>)
                    }
                   { 
                        isComponentUpiVisible && (<UPI/>)
                    }
                   { 
                        isComponentTravelVisible && (<Travel />)
                    }
                   { 
                        isComponentTicketVisible && (<Ticket />)
                    }
                   { 
                        isComponentResultVisible && (<Result />)
                    }
                   { 
                        isComponentOttVisible && (<OTT />)
                    }
                   { 
                        isComponentOrderingVisible && (<ORDER />)
                    }
                   { 
                        isComponentEssentialVisible && (<ESSENTIAL />)
                    }
                   { 
                        isComponentCryptoVisible && (<CRYPTO />)
                    }
                   { 
                        isComponentCourierVisible && (<COURIER />)
                    }
                   { 
                        isComponentBroadbandVisible && (<BROADBAND />)
                    }
                   { 
                        isComponentGamingVisible && (<GAMING />)
                    }
             </div>
        
    </div>

</div>
  )
}

export default Top25Landing