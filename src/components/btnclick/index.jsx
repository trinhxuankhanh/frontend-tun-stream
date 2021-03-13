import React from "react";
import "./style.scss";

const Btnclick = (props) => {
  const { icon, content, component, click, value } = props;
  return (
    <button onClick={() => click(value)} to={component} className="btn">
      {icon && <img src={icon} alt="icon" className="btn__img"></img>}
      <p className="btn__title">{content}</p>
    </button>
  );
};

export default Btnclick;
