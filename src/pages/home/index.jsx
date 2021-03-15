import React from "react";
import { Link } from "react-router-dom";
import headerHome from "../../asset/img/headerhome.svg";
import next from "../../asset/img/next.svg";
import CardStream from "../../components/card/cardstream";
import CarouselGame from "../../components/carousel";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <img className="img-fluid" src={headerHome} alt="icon"></img>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="headersection">
              <h2 className="headersection__title">Trò chơi hàng đầu</h2>
              <Link className="headersection__detail" to="/game">
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
                <Link className="headersection__detail" to="#asdasd">
                  Xem tất cả
                  <img
                    className="headersection__img"
                    src={next}
                    alt="icon"
                  ></img>
                </Link>
              </div>
            </div>

            {/* <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div> */}
          </div>
          <div className="col-12 row">
            <div className="col-12">
              <div className="headersection">
                <h2 className="headersection__title">PUBG</h2>
                <Link className="headersection__detail" to="#asdasd">
                  Xem tất cả
                  <img
                    className="headersection__img"
                    src={next}
                    alt="icon"
                  ></img>
                </Link>
              </div>
            </div>

            {/* <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div>

            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <CardStream />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
