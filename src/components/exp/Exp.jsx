import "./exp.css";
import Firm from "../firm/Firm";
import { firms } from "../../data";

const FirmsList = () => {
  return (
    <div className="exp">
      <div className="exp-texts">
        <h1 className="exp-title">Create & inspire. It's Lama</h1>
        <p className="exp-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="exp-list">
        {firms.map((item) => (
          <Firm key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default FirmsList;