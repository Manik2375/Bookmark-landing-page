import { useState } from "react";

import "./Tabs.css";
import Tab from "./Tab/Tab.jsx";
import Result from "./Result/Result.jsx";

import TabImg1 from  "/src/assets/illustration-features-tab-1.svg";
import TabImg2 from "/src/assets/illustration-features-tab-2.svg";
import TabImg3 from "/src/assets/illustration-features-tab-3.svg"

const tabs = [
  {
    imgSrc: TabImg1,
    heading: " Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    key: 1,
  },
  {
    imgSrc: TabImg2,
    heading: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    key: 2,
  },
  {
    imgSrc: TabImg3,
    heading: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    key: 3,
  },
];

export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tab = tabs[activeTabIndex];

  const handleActiveTab = (index) => {
    setActiveTabIndex(index);
  };
  return (
    <>
      <div className="tabs">
        <div className="tabs-btns">
          <Tab
            tabIndex={0}
            isActive={0 === activeTabIndex}
            onActive={handleActiveTab}
          >
            Simple Bookmarking
          </Tab>
          <Tab
            tabIndex={1}
            isActive={1 === activeTabIndex}
            onActive={handleActiveTab}
          >
            Speedy Searching
          </Tab>
          <Tab
            tabIndex={2}
            isActive={2 === activeTabIndex}
            onActive={handleActiveTab}
          >
            Easy Sharing
          </Tab>
        </div>
        <Result
          imgSrc={tab.imgSrc}
          heading={tab.heading}
          content={tab.content}
          key={tab.key}
        />
      </div>
    </>
  );
}
