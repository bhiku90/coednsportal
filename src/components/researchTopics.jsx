export const ResearchTopics = (props) => {
  return (
    <div id="researchTopics" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Ongoing Research</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-6">
                  <br />
                  <br />
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <br/>
                  <a
                    type="button"
                    className="btn btn-outline-primary btn-rounded"
                    href={d.link}
                    target="_blank"
                  >
                    Learn More
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
