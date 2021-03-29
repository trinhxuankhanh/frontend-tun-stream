import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import getGameDetailApi from "../../api/getGameDetailApi";
import Footer from "../../components/footer";
import Header from "../../components/header";
import viewers from "../../asset/img/viewers.svg";

import "./style.scss";
import getLiveByIdGameApi from "../../api/getLiveByIdGameApi";
import CardStream from "../../components/card/cardstream";

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [lives, setLives] = useState([]);

  useEffect(() => {
    getGameDetailApi
      .get(id)
      .then((response) => {
        setGame(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    getLiveByIdGameApi
      .get(id)
      .then((response) => {
        setLives(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row game pt-5">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="game__img">
              <img src={game.img} alt="img" />
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-8">
            <div className="game__title">
              <h4>{game.name}</h4>
              <p>{game.description}</p>

              <span>
                <img src={viewers} alt="icon" /> {lives.length} Trực tiếp
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row game pt-5">
          {lives.length > 0 &&
            lives.map((live) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CardStream
                    title={live.title}
                    viewer={live.viewer}
                    user={live.id_user}
                    stream_key={live.stream_key}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default GameDetail;
