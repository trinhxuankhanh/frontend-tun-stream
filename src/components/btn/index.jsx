import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Btn = (props) => {
  const { icon, content, component } = props;
  return (
    <Link to={component} className="btn">
      {icon && <img src={icon} alt="icon" className="btn__img"></img>}
      <p className="btn__title">{content}</p>
    </Link>
  );
};

export default Btn;
