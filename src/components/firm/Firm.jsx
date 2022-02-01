import "./firm.scss";

const Firm = ({img,link}) => {
  return (
    <div className="f">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="f-img" />
      </a>
    </div>
  );
};

export default Firm;