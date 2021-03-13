import React, { useEffect, useState } from "react";
import getGameApi from "../../api/getGameApi";
import Btnclick from "../../components/btnclick";
import UniqueGame from "../../components/card/uniquegame";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.scss";

const Game = () => {
  const [games, setGames] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    getGameApi
      .getGame({ type: type })
      .then((response) => {
        setGames(response);
      })
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <React.Fragment>
      <Header />
      <div className="game pt-3 container-fluid">
        <div className="row">
          <div className="col-12 p-4 m-0">
            <h2 className="text">Danh sách trò chơi</h2>
          </div>
          <div className="col-12 d-flex flex-row m-0 p-4">
            <Btnclick content="Toàn bộ" click={setType} value=""></Btnclick>
            <Btnclick
              content="Moblie Game"
              click={setType}
              value="moblie"
            ></Btnclick>
            <Btnclick content="PC Game" click={setType} value="pc"></Btnclick>
          </div>
          {games.length > 0 &&
            games.map((game, index) => {
              return (
                <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                  <UniqueGame key={index} name={game.name} img={game.img} />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Game;
