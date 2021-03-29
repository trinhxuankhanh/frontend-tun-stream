import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getLiveByIdGameApi from "../../api/getLiveByIdGameApi";
import headerHome from "../../asset/img/headerhome.svg";
import next from "../../asset/img/next.svg";
import CardStream from "../../components/card/cardstream";
import CarouselGame from "../../components/carousel";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.scss";

const Home = () => {
  const [livesLMHT, setLivesLMHT] = useState([]);
  const [livesPUBG, setLivesPUBG] = useState([]);

  useEffect(() => {
    getLiveByIdGameApi
      .get("602e1eeeb712f341b73cb891")
      .then((response) => {
        setLivesLMHT(response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getLiveByIdGameApi
      .get("602e1eeeb712f341b73cb88e")
      .then((response) => {
        setLivesPUBG(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <Header />
      <img className="img-fluid" src={headerHome} alt="icon"></img>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="headersection">
              <h2 className="headersection__title">Trò chơi hàng đầu</h2>
              <Link
                className="headersection__detail"
                to="/game/602e1eeeb712f341b73cb891"
              >
                Xem tất cả
                <img className="headersection__img" src={next} alt="icon"></img>
              </Link>
            </div>
          </div>
          <div className="col-12">
            <CarouselGame />
          </div>
          <div className="col-12 row">
            <div className="col-12">
              <div className="headersection">
                <h2 className="headersection__title">Liên minh huyền thoại</h2>
                <Link
                  className="headersection__detail"
                  to="/game/602e1eeeb712f341b73cb891"
                >
                  Xem tất cả
                  <img
                    className="headersection__img"
                    src={next}
                    alt="icon"
                  ></img>
                </Link>
              </div>
            </div>

            {livesLMHT.length > 0 &&
              livesLMHT.slice(0, 4).map((live) => {
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
          <div className="col-12 row">
            <div className="col-12">
              <div className="headersection">
                <h2 className="headersection__title">PUBG</h2>
                <Link
                  className="headersection__detail"
                  to="/game/602e1eeeb712f341b73cb88e"
                >
                  Xem tất cả
                  <img
                    className="headersection__img"
                    src={next}
                    alt="icon"
                  ></img>
                </Link>
              </div>
            </div>

            {livesPUBG.length > 0 &&
              livesPUBG.slice(0, 4).map((live) => {
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
