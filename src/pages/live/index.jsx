import React from "react";
import CardStream from "../../components/card/cardstream";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.scss";

const Live = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="live pt-3 container-fluid">
        <div className="row">
          <div className="col-12 m-0 p-4">
            <h2 className="text">Đang live</h2>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Live;
