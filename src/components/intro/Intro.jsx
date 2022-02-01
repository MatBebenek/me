import "./intro.scss";
import Me from "../../img/photo.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
      <div className="i-right">
        <div className="i-right-wrapper">
          <div className="i-intro">Hello, I'm</div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Mateusz Bębenek</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Software Specialist</div>
              <div className="i-title-item">Fullstack Engineer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites. I have solid understanding of full development lifecycle.
          </div>
          <div className="i-contact">Feel free to contact me.</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

