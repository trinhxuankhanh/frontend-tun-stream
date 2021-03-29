import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import getGameApi from "../../api/getGameApi";
import getUserApi from "../../api/getUserApi";
import postNewStreamApi from "../../api/postNewStreamApi";
import postStream from "../../api/postStreamApi";
import play from "../../asset/img/play.svg";
import stop from "../../asset/img/stop.svg";
import Btn from "../../components/btn";
import Btnclick from "../../components/btnclick";
import Footer from "../../components/footer";
import Header from "../../components/header";
import edit from "../../asset/img/pencil.svg";
import "./style.scss";
import Thumbnail from "../../components/thumbnail";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [games, setGames] = useState([]);
  const auth = JSON.parse(localStorage.getItem("user"));
  const [dropdownOpenPC, setOpenPC] = useState(false);
  const [dropdownOpenMoblie, setOpenMoblie] = useState(false);
  const [gamePC, setGamePC] = useState("Game PC");
  const [gameMoblie, setGameMoblie] = useState("Game Moblie");
  const [titleStream, setTitleStream] = useState("");
  const [isStream, setIsStream] = useState(false);
  const [thumbnail, setThumbnail] = useState("");

  const togglePC = () => setOpenPC(!dropdownOpenPC);
  const toggleMoblie = () => setOpenMoblie(!dropdownOpenMoblie);

  if (auth === null) window.location.href = "/login";

  const handleStopStream = () => {
    setIsStream(!isStream);
    postStream.postStream(
      { id_game: 0, title: "", status: false },
      auth.stream_key
    );
  };

  const handleSubmitStream = () => {
    if (gamePC === "Game PC" && gameMoblie === "Game Moblie")
      return alert("Vui lòng chọn game");
    if (thumbnail === "") return alert("Vui lòng chọn thumbnail");
    if (gamePC === "Game PC" && gameMoblie !== "Game Moblie") {
      setIsStream(!isStream);
      let id_game = games.find((game) => game.name === gameMoblie)._id;
      postStream.postStream(
        {
          id_game,
          title: titleStream,
          status: true,
          thumbnail: thumbnail.base64,
        },
        auth.stream_key
      );
      setGameMoblie("Game Moblie");
    } else {
      setIsStream(!isStream);
      let id_game = games.find((game) => game.name === gamePC)._id;
      postStream.postStream(
        {
          id_game,
          title: titleStream,
          status: true,
          thumbnail: thumbnail.base64,
        },
        auth.stream_key
      );
      setGamePC("Game PC");
    }

    setTitleStream("");
  };

  const handleClickGamePC = (e) => {
    setGamePC(e.target.innerHTML);
    setGameMoblie("Game Moblie");
  };

  const handleClickGameMoblie = (e) => {
    setGameMoblie(e.target.innerHTML);
    setGamePC("Game PC");
  };

  const handleOnChangeTitle = (e) => {
    setTitleStream(e.target.value);
  };

  useEffect(() => {
    getUserApi
      .getUserById(id)
      .then((response) => {
        setUser(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getGameApi
      .getGame({ type: "" })
      .then((response) => setGames(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    postNewStreamApi
      .post({ auth }, auth.stream_key)
      .then((response) => setIsStream(response.status))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Header />
      {user !== null && games.length > 0 && (
        <div className="user row m-0">
          <ul className="col-12">
            <li>
              <img src={user.avt} alt="img" />
            </li>
            <li>
              Tên người dùng: <span>{user.username}</span>
            </li>
            <li>
              Điện thoại: <span>{user.phone}</span>
            </li>
            {isStream && (
              <li>
                <Btnclick
                  content="Dừng stream ngay!"
                  icon={stop}
                  click={handleStopStream}
                ></Btnclick>
              </li>
            )}
            {!isStream && (
              <React.Fragment>
                <li>
                  Bạn có thể bắt đầu live ở đây{" "}
                  <span>rtmp://127.0.0.1:1935/live</span>
                </li>
                <li>
                  Stream key của bạn là: <span>{user.stream_key}</span>
                </li>
                <li>
                  Nói về buổi stream của bạn
                  <input
                    type="text"
                    maxLength="100"
                    value={titleStream}
                    placeholder="Chiến LOL thôi anh em ...."
                    onChange={handleOnChangeTitle}
                  />
                </li>
                <li>
                  Chọn một hình làm thumbnail cho buổi stream của bạn
                  <Thumbnail seturl={setThumbnail} />
                </li>
                <li>Vui lòng chọn game bạn muốn stream</li>
                <li className="games">
                  <label for="gamepc">Game PC: </label>
                  <input type="radio" id="gamepc" name="game" />
                  <ButtonDropdown
                    className="gamepc"
                    isOpen={dropdownOpenPC}
                    toggle={togglePC}
                  >
                    <DropdownToggle caret>{gamePC}</DropdownToggle>
                    <DropdownMenu>
                      {games
                        .filter((game) => game.type === "pc")
                        .map((game) => (
                          <DropdownItem
                            onClick={handleClickGamePC}
                            key={game._id}
                            value={game._id}
                          >
                            {game.name}
                          </DropdownItem>
                        ))}
                    </DropdownMenu>
                  </ButtonDropdown>
                  <label for="gamemoblie">Game Moblie: </label>
                  <input type="radio" id="gamemoblie" name="game" />
                  <ButtonDropdown
                    className="gamemoblie"
                    isOpen={dropdownOpenMoblie}
                    toggle={toggleMoblie}
                  >
                    <DropdownToggle caret>{gameMoblie}</DropdownToggle>
                    <DropdownMenu>
                      {games
                        .filter((game) => game.type !== "pc")
                        .map((game) => (
                          <DropdownItem
                            key={game._id}
                            onClick={handleClickGameMoblie}
                            value={game._id}
                          >
                            {game.name}
                          </DropdownItem>
                        ))}
                    </DropdownMenu>
                  </ButtonDropdown>
                </li>
                <li>
                  <Btnclick
                    content="Bắt đầu stream ngay thôi"
                    icon={play}
                    click={handleSubmitStream}
                  />
                </li>
                <li className="d-flex">
                  <Btn
                    component={`/updateuser/${id}`}
                    icon={edit}
                    content={"Sửa thông tin cá nhân"}
                  />
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default User;
