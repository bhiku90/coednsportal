export const Publications = (props) => {
  return (
    <div id="publications">
      <div className="container">
        <br />
        <div className="section-title text-center">
          <h2 className="text-center">Publications</h2>
        </div>
        <div className="row" style={{marginLeft:"2px"}}>
          <h2>Research Paper : </h2>
          {props.data
            ? props.data.map((obj) => (
                <div key={obj.head}>
                  <a rel="noreferrer" target="_blank" href={obj.link}>
                    <h5>{obj.head}</h5>
                  </a>
                  <p>
                    <b>{obj.name}</b>
                  </p>
                  <p>{obj.publisher}</p>
                  <a href={obj.doi} rel="noreferrer" target="_blank">{obj.doi}</a>
                  <p>{obj.issue}</p>
                  <br />
                </div>
              ))
            : "loading"}
          <br />
          <h2>Whitepaper : </h2>
          <a target="_blank" href="pdf/ReducingRTTofDNSQueryResolution-v0.pdf">
            <h5>Reducing RTT of DNS Query Resolution using RFC 7706</h5>
          </a>
          <p>January 2020</p>
          <br />
          <a target="_blank" href="pdf/ReducingRTTofDNSQueryResolution-V1.pdf">
            <h5>Reducing RTT of DNS Query Resolution using RFC 8806</h5>
          </a>
          <p>
            <b>
              Balaji Rajendran, Gopinath Palaniappan, Sanjay Adiwal, Shubham
              Goyal, Bindhumadhava BS
            </b>
          </p>
          <p>October 2020</p>
          <a target="_blank" href="pdf/ReducingRTTofDNSQueryResolution-V1.pdf">10.17605/osf.io/T9N5X</a>
          <br />
          <a target="_blank" href="pdf/An_Intrusion_using_Malware_and_DDNS.pdf">
            <h5>An Intrusion using Malware and DDNS</h5>
          </a>
          <p>
            <b>
              Gopinath Palaniappan, Dr. Balaji Rajendran, Dr. S Sangeetha, Dr.
              Kumari Roshni V S
            </b>
          </p>
          <p>January 2019</p>
          <a target="_blank" href="pdf/An_Intrusion_using_Malware_and_DDNS.pdf">10.17605/osf.io/zwnha</a>
          <br />
        </div>
      </div>
    </div>
  );
};
