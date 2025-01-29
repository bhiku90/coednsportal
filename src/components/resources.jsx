import React from "react";
export const Resources = (props) => {
  return (
    <div id="resources" className="text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>Resources</h2>
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
            Configuring to use Rakshak DNS
            </td>
            <td>
              <a href="pdf/ConfiguringforRakshakDNS-Manual.pdf" target="_blank">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Installation and Configuration of DNS Server Using Bind on CentOS
            </td>
            <td>
              <a href="pdf/DNS-Bind-Server-Installation-Configuration.pdf" target="_blank">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              DNS Hardening by Security Enrichment and Performance Enhancement
              of Recursive Resolver
            </td>
            <td>
              <a href="pdf/DNS-Hardening-by-Security-Enrichment-and-Performance-Enhancement-of-Recursive-Resolver.pdf" target="_blank">
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Installation and Configuration of DoH (DNS over HTTPS) and DoT
              (DNS over TLS)
            </td>
            <td>
              <a href="pdf/DoT-DoH-Manual-V2-end removed.pdf" target="_blank">Click here</a>
            </td>
          </tr>
          </tbody>
        </table>
        <br />
       
        </div>
        <br/>
        <br />
        <h3>Bind Distribution (for Linux)</h3>
        <br />
        <div style={{overflowX:"auto"}}>
        <table>
          <thead>
          <tr>
            <th>S.No</th>
            <th>Version of Bind</th>
            <th>Status</th>
            <th>Release Date</th>
            <th>Download</th>
            <th>Manual</th>
            <th>License</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>9.18.21</td>
            <td>Stable</td>
            <td>December 2023</td>
            <td>
              <a href="pdf/bind-9.18.21.tar.xz">Click Here</a>
            </td>
            <td>
              <a href="pdf/RR_Bind9_18_21_Manual.pdf" target="_blank">
                Click Here
              </a>
            </td>
            <td>
              <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank">License</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>9.18.2</td>
            <td>Stable</td>
            <td>April 2022</td>
            <td>
              <a href="pdf/bind-9.18.2.tar.xz">Click Here</a>
            </td>
            <td>
              <a href="pdf/DNS-Bind-9-18-Server-Installation-Configuration.pdf" target="_blank">
                Click Here
              </a>
            </td>
            <td>
              <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank">License</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>9.16.6</td>
            <td>Stable</td>
            <td>August 2020</td>
            <td>
              <a href="pdf/bind-9.16.6.tar.xz">Click Here</a>
            </td>
            <td>
              <a href="pdf/DNS-Bind-Server-Installation-Configuration.pdf" target="_blank">
                Click Here
              </a>
            </td>
            <td>
              <a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank">License</a>
            </td>
          </tr>
          </tbody>
        </table>
        </div>
        <br />
        <br />
        <h3>Software</h3>
        <br/>
        <br/>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email Safeness Scorer</td>
              <td><a href="assets/zip/Email_Safe_Score_Install.zip">Click Here</a></td>
            </tr>
          </tbody>
        </table>
       
      </div>
      <br/>
      <h3>Learning</h3>
      <br/>
      <br/>
          <div className="container">
            <div className="row">
              {props.data
                ? props.data.map((d, i) => (
                    <div key={`${d.title}-${i}`} className="col-xs-6 col-md-6">
                      <br />
                      <br />
                      <i className={d.icon}></i>
                      <h3>{d.title}</h3>
                      <p style={{color:"#777"}}>{d.text}</p>
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
