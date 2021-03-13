import React from "react";
import { Link } from "react-router-dom";
import viewers from "../../../asset/img/viewers.svg";
import Btn from "../../btn";
import "./style.scss";

const CardStream = () => {
  return (
    <div className="cardstream m-auto">
      <Link to="#asdasdasdas" className="cardstream__top">
        <img
          src="https://img.nimo.tv/o/banner/CCF68FF08ABE024B7B3DBA7022A4AC50_1cb4aaf04a9f525140ba1ba4958df9c6.jpg/w800_l0/img.jpg"
          alt="intro"
        ></img>
        <Btn content="PC Game" />
      </Link>
      <div className="cardstream__bottom">
        <Link to="#asdasdasd" className="cardstream__bottomleft">
          <img
            src="https://img.nimo.tv/t/1599517262565/202012011606811498964_1599517262565_avatar.png/w120_l0/img.png"
            alt="user"
          ></img>
        </Link>
        <div className="cardstream__bottomright">
          <Link to="#asdasd">
            <h3>Hí anh em</h3>
          </Link>
          <Link to="#sasdasdsad">
            <p>Độ mixi</p>
          </Link>
          <div className="viewer">
            <img src={viewers} alt="icon"></img>
            <span>111k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStream;
