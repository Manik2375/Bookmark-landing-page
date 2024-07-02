import "./Result.css";

// eslint-disable-next-line react/prop-types
export default function Result({ imgSrc, heading, content }) {
  return (
    <div className="result">
      <div className="img-container"><img src={imgSrc} alt="" /></div>
      <div className="result-content">
      <h3>{heading}</h3>
      <p>{content}</p>
      <button className="result-more-info-btn">More info</button>
      </div>
    </div>
  );
}
