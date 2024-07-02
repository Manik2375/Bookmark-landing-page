import "./Tab.css";

// eslint-disable-next-line react/prop-types
export default function Tab({ children, onActive, isActive, tabIndex }) {
  return (
    <button className={(isActive ? "active " : "") + "tab-button"}
      onClick={() => {
        onActive(tabIndex);
      }}
    >
      {children}
    </button>
  );
}
