import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const UniqueGame = (props) => {
  const { img, name } = props;
  return (
    <Link to={`/${name}`} className="cardgames m-auto">
      <img className="cardgames__img" src={img} alt="game"></img>
      <p className="cardgames__name m-2">{name}</p>
    </Link>
  );
};

export default UniqueGame;
