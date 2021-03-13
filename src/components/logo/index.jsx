import React from "react";
import logo from "../../asset/img/television.svg";
import { Link } from "react-router-dom";
import "./style.scss";

const Logo = (props) => {
  const { component } = props;
  return (
    <Link to={component ? component : "/"} className="logo">
      <img className="logo__img" src={logo} alt="icon"></img>
      <h1 className="logo__name">Tun's stream</h1>
    </Link>
  );
};

export default Logo;
