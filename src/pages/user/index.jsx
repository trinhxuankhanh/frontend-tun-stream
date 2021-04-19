import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import ids from "shortid";
import getGameApi from "../../api/getGameApi";
import getLiveApi from "../../api/getLiveApi";
import getUserApi from "../../api/getUserApi";
import postNewStreamApi from "../../api/postNewStreamApi";
import postStream from "../../api/postStreamApi";
import edit from "../../asset/img/pencil.svg";
import play from "../../asset/img/play.svg";
import stop from "../../asset/img/stop.svg";
import Btn from "../../components/btn";
import Btnclick from "../../components/btnclick";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Thumbnail from "../../components/thumbnail";
import "./style.scss";

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
  const [streamKey, setStreamKey] = useState(ids.generate());
  const [live, setLive] = useState("");

  const togglePC = () => setOpenPC(!dropdownOpenPC);
  const toggleMoblie = () => setOpenMoblie(!dropdownOpenMoblie);

  if (auth === null) window.location.href = "/login";

  const handleStopStream = () => {
    setIsStream(!isStream);
    getLiveApi
      .getLiveByIdLive(live._id)
      .then((response) => {
        postStream.postStream(
          {
            id_game: 0,
            title: "",
            status: false,
            thumbnail: "",
            stream_key: null,
            room: response.stream_key,
          },
          live._id
        );
      })
      .catch((err) => console.log(err));
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
          stream_key: streamKey,
        },
        live._id
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
          stream_key: streamKey,
        },
        live._id
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
      .post({ auth, stream_key: streamKey }, auth._id)
      .then((response) => {
        setIsStream(response.status);
        setLive(response.live);
      })
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
                <li className="d-flex align-items-center">
                  Stream key của bạn là: <span>{streamKey}</span>
                  <Btnclick
                    content="Tạo key mới"
                    click={() => setStreamKey(ids.generate())}
                  />
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
