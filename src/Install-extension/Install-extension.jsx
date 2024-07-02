import "./Install-extension.css";

import Card from "./Card/Card.jsx";
import ChromeLogo from "/src/assets/logo-chrome.svg"
import FireFoxLogo from "/src/assets/logo-firefox.svg"
import OperaLogo from "/src/assets/logo-opera.svg"

export default function Install() {
  return (
    <div className="download-container">
      <div className="download-content">
        <h3>Download the extension</h3>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.{" "}
        </p>
      </div>
      <div className="card-container">
        <Card
          imgSrc={ChromeLogo}
          browser="Chrome"
          minVersion="62"
        />
        <Card
          imgSrc={FireFoxLogo}
          browser="FireFox"
          minVersion="55"
        />
        <Card
          imgSrc={OperaLogo}
          browser="Opera"
          minVersion="46"
        />
      </div>
    </div>
  );
}
