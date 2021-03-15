import React from "react";
import { Link } from "react-router-dom";
import viewers from "../../../asset/img/viewers.svg";
import Btn from "../../btn";
import "./style.scss";

const CardStream = (props) => {
  const { title, viewer, user, stream_key } = props;
  const { avt, username } = user;
  return (
    <div className="cardstream m-auto">
      <Link to={`/stream/${stream_key}`} className="cardstream__top">
        <img
          src="https://img.nimo.tv/o/banner/CCF68FF08ABE024B7B3DBA7022A4AC50_1cb4aaf04a9f525140ba1ba4958df9c6.jpg/w800_l0/img.jpg"
          alt="intro"
        ></img>
        <Btn content="PC Game" />
      </Link>
      <div className="cardstream__bottom">
        <Link to="#asdasdasd" className="cardstream__bottomleft">
          <img src={avt} alt="user"></img>
        </Link>
        <div className="cardstream__bottomright">
          <Link to="/stream">
            <h3>{title}</h3>
          </Link>
          <Link to="#sasdasdsad">
            <p>{username}</p>
          </Link>
          <div className="viewer">
            <img src={viewers} alt="icon"></img>
            <span>{viewer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStream;
