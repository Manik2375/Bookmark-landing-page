import "./Features.css";
import Tabs from "./Tabs/Tabs.jsx";

export default function Features() {
  return (
    <>
      <div className="features-content">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <Tabs />
    </>
  );
}
