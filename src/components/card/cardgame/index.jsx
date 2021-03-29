import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const CardGame = (props) => {
  const { name, img, id } = props;

  return (
    <div className="colcustom">
      <Link to={`/game/${id}`} className="cardgame">
        <span>
          <img src={img} alt="Nimo TV" className="cardgame__img"></img>
        </span>
      </Link>
      <Link to={`/game/${id}`} className="cardgame__title">
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default CardGame;
