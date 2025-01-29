import { useEffect } from "react";

export const PublicDnsServer = () => {
  return (
    <div id="pds" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Public DNS Server</h2>
          <br />
          <h3>
            Our Public DNS Recursive Resolver for both IPv4 and IPv6 traffic is
            available for Internet users Worldwide at :
          </h3>
          <p>
            <b>IPv4 :</b> 103.58.120.120 <br />
            <b>IPv6 :</b> 2405:8a00:8001::20
          </p>
          <i className="fa fa-check-square-o" aria-hidden="true"></i> DNSSEC Enabled{" "}
          <br />
          <i className="fa fa-check-square-o" aria-hidden="true"></i> RFC 8806
          Compliant
          <h3>
            Our DOH (DNS over HTTPS) Server :<b> https://doh.iiref.in</b>
          </h3>
          <h3>
            Our DOT (DNS over TLS) Server :<b> tls://dot.iiref.in</b>
          </h3>
        </div>
      </div>
    </div>
  );
};
