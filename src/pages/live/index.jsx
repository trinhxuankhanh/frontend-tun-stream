import axios from "axios";
import React, { useEffect, useState } from "react";
import getLiveApi from "../../api/getLiveApi";
import CardStream from "../../components/card/cardstream";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.scss";

const Live = () => {
  const [lives, setLives] = useState([]);
  const [userLives, setUserLives] = useState([]);
  const [cardLives, setCardLives] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:8888/api/streams",
    })
      .then((response) => {
        if (response && response.data) {
          setLives(Object.keys(response.data.live));
        }

        return response;
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getLiveApi
      .get()
      .then((response) => {
        setUserLives(response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (lives.length > 0 && userLives.length > 0) {
      const newArr = userLives
        .filter((item) => item.status === true)
        .map((item) => {
          if (lives.includes(item.stream_key)) return item;
        })
        .filter((item) => item !== undefined);

      setCardLives(newArr);
    }
  }, [lives, userLives]);

  return (
    <React.Fragment>
      <Header />
      <div className="live pt-3 container-fluid">
        <div className="row">
          <div className="col-12 m-0 p-4">
            <h2 className="text">Đang live</h2>
          </div>
          {cardLives.length > 0 &&
            cardLives.map((item) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                  <CardStream
                    title={item.title}
                    viewer={item.viewer}
                    user={item.id_user}
                    stream_key={item.stream_key}
                    thumbnail={item.thumbnail}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Live;
