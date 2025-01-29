import meityLogo from "../images/meity.png";
import nixiLogo from "../images/small-nixi.png";
import cdacLogo from "../images/cdac.png";

export const About = (props) => {
 
  return (
    <div id="about">
      <div className="container">
        <div className="row" style={{justifyContent:"center"}}>
        <div className="row text-center">
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <a href="https://meity.gov.in/" target="_blank">
      <img style={{width: "100%", maxWidth: "300px"}} src={meityLogo} alt="" height="130" />
    </a>
  </div>
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <a href="https://nixi.in/" target="_blank">
      <img style={{width: "100%", maxWidth: "200px"}} src={nixiLogo} alt="" height="90" />
    </a>
  </div>
  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    <a href="https://www.cdac.in/" target="_blank">
      <img style={{width: "100%", maxWidth: "200px"}} src={cdacLogo} alt="" height="115" />
    </a>
  </div>
</div>
          <div className="col-md-10 col-md-offset-1 section-title">
            <div className="about-text">
              <br />
              <br />
              <br />
              <br />
              <br/>
              <h2>About Us</h2>
              <br/>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};
