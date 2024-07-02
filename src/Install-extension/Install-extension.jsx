import "./Install-extension.css";

import Card from "./Card/Card.jsx";

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
          imgSrc="/src/assets/logo-chrome.svg"
          browser="Chrome"
          minVersion="62"
        />
        <Card
          imgSrc="/src/assets/logo-firefox.svg"
          browser="FireFox"
          minVersion="55"
        />
        <Card
          imgSrc="/src/assets/logo-opera.svg"
          browser="Opera"
          minVersion="46"
        />
      </div>
    </div>
  );
}
