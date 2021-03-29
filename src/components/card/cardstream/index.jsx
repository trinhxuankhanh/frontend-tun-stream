import React from "react";
import { Link } from "react-router-dom";
import postUpViewerApi from "../../../api/postUpViewerApi";
import viewers from "../../../asset/img/viewers.svg";
import Btn from "../../btn";
import "./style.scss";

const CardStream = (props) => {
  const { title, viewer, user, stream_key, thumbnail } = props;
  const { avt, username } = user;
  const handleUpViewer = () => {
    postUpViewerApi.post(stream_key);
  };
  return (
    <div className="cardstream m-auto" onClick={handleUpViewer}>
      <Link to={`/stream/${stream_key}`} className="cardstream__top">
        <img src={thumbnail} alt="intro"></img>
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
