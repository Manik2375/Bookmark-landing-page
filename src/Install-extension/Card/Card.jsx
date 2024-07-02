import "./Card.css";
import dot from "/src/assets/bg-dots.svg"

// eslint-disable-next-line react/prop-types
export default function Card({ imgSrc, browser, minVersion }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={browser + " logo"} />
      <div className="card-content">
        <h4>Add to {browser}</h4>
        <span className="minVersion">Minimum Version {minVersion}</span>
      </div>
      <div className="dots-decoration">
        <img src={dot} alt="" />
      </div>
      <a href="#" className="install-link">
        Add & Install Extension
      </a>
    </div>
  );
}
