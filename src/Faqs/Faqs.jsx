import "./Faqs.css";

import Faq from "./Faq/Faq.jsx";

export default function Faqs() {
  return (
    <div className="faqs">
      <div className="faqs-content">
        <h4>Frequently Asked Questions</h4>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <Faq
        question="What is Bookmark?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        index="1"
      />
      <Faq
        question="How can I request a new browser?"
        answer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet."
        index="2"
      />
      <Faq
        question="  Is there a mobile app?"
        answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget."
        index="3"
      />
      <Faq
        question="  What about other Chromium browsers?"
        answer=" Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit."
        index="4"
      />
      <button className="btn-more-info">More info</button>
    </div>
  );
}
