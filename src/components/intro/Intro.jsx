import "./intro.css";
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
        <h2 className="i-intro">Hello, I'm</h2>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Mateusz Bębenek</div>
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Software Specialist</div>
            <div className="i-title-item">Fullstack Engineer</div>
            <div className="i-title-item">UI/UX Designer</div>
          </div>
        </div>
        <p className="i-desc">
          I design and develop services for customers of all sizes,
          specializing in creating stylish, modern websites with various backend services.
        </p>
        <p className="i-contact">Feel free to contact me in any case.</p>
      </div>
      </div>
    </div>
    );
};

export default Intro;

