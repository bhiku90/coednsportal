import icon from "../images/presentation.png";
export const Training = (props) => {
  return (
    <div id="training" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>DNS Security Training</h2>
          <br />
          <div>
            <h4>Who should attend ?</h4>
            <br />
            <p>
              <b>Target audience:</b> Academia, researchers, cyber security
              professionals and aspiring DNS professionals.
            </p>
          </div>
        </div>
        <div className="manual">
          <img src={icon} height="50" width="50" hspace="20" alt="icon"></img>
          {/* <p>
            <b> Upcoming Trainings</b>
          </p>
          {props.data
            ? props.data.map((obj) => (
                <div key={obj.linkRegister}>
                  <h4>
                    {obj.textTitle}
                  </h4>
                  <h4>
                    {obj.textDate}
                  </h4>
                  <h4>
                    {obj.textTime}
                  </h4>
                  <a href={obj.pdflink} target="_blank"> <h4 style={{color:"#3b4252"}}>{obj.textSchedule}</h4> </a>
                  
                  <h2>
                      <h4>{obj.textRegister}</h4> 
                      <a href={obj.linkRegister} rel="noreferrer" target="_blank" id="register" style={{textTransform: "lowercase"}}>
                      {obj.linkRegister}
                    </a>
                    <h4>
                  </h4>
                  </h2> 
                </div>
              ))
            : "Loading..."}
                <div>
                  <img src="img/team/qrcode.png"alt='...'  style={{ height:"100px"  }}/>
                </div>                 
          <br/> */}
          <p>
            <b> Previous Trainings</b>
          </p>
          {props.data
            ? props.data.map((obj, index) => (
                <div key={`${obj.link}-${index}`}>
                  <a href={obj.link} rel="noreferrer" target="_blank">
                    {obj.text}
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
