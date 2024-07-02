import "./Hero.css";
import HeroImg from "../assets/illustration-hero.svg";

export default function Hero() {
  return (
    <section>
      <div className="hero-img-wrapper">
        <img
          src={HeroImg}
          alt=""
          className="hero-img"
          width="657"
          height="466"
        />
      </div>
      <div className="hero-content">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero-btns">
          <button className="hero-btn hero-btn-special">Get on chrome</button>
          <button className="hero-btn">Get it on Firefox</button>
        </div>
      </div>
    </section>
  );
}
