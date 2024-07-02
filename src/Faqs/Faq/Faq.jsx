import "./Faq.css";

// eslint-disable-next-line react/prop-types
export default function Faq({ question, answer, index }) {
  return (
    <div className="faq">
      <input
        type="checkbox"
        id={"faq-" + index}
        onFocus={(e) => {
          e.preventDefault();
        }}
        aria-hidden="true"
      />
      <label htmlFor={"faq-" + index} aria-label="Show the Faq">
        {question}{" "}
        <div className="arrow-img-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            stroke="#5267DF"
          >
            <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
          </svg>
        </div>
      </label>

      <div className="faq-answer">{answer}</div>
    </div>
  );
}
