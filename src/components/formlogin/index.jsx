import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../../asset/img/facebook.svg";
import google from "../../asset/img/google.svg";
import Logo from "../logo";
import "./style.scss";

const FormLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [nickName, setNickName] = useState("");
  const [phone, setPhone] = useState("");

  const { handle, type } = props;

  const handleNickName = (e) => {
    setNickName(e.target.value);
  };

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassWord = (e) => {
    setPassword(e.target.value);
  };

  const handleRePass = (e) => {
    setRepass(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      handle({ username: nickName, email: username, password, repass, phone });
    }

    setNickName("");
    setRepass("");
    setUsername("");
    setPassword("");
    setPhone("");
  };
  return (
    <div className="formlogin">
      <div className="header p-0">
        <Logo component="#" />
        <Link className="hover" to="/login">
          Đăng nhập
        </Link>
        <Link className="hover" to="/register">
          Đăng kí
        </Link>
      </div>
      <div className="main">
        <form className="content" onSubmit={handleSubmitForm}>
          {type === "register" && (
            <input
              type="text"
              className="content__repass"
              value={nickName}
              onChange={handleNickName}
              placeholder="User name"
            ></input>
          )}
          {type === "register" && (
            <input
              type="text"
              className="content__repass"
              value={phone}
              onChange={handlePhone}
              placeholder="Phone"
            ></input>
          )}
          <input
            type="email"
            maxLength="30"
            className="content__username"
            placeholder="Email"
            value={username}
            onChange={handleUserName}
          ></input>
          <input
            type="password"
            maxLength="30"
            className="content__password"
            placeholder="Password"
            value={password}
            onChange={handlePassWord}
          ></input>
          {type === "register" && (
            <input
              type="password"
              className="content__repass"
              value={repass}
              onChange={handleRePass}
              placeholder="Password"
            ></input>
          )}

          <button className="btn btn-block">
            {type === "register" ? "Đăng kí" : "Đăng nhập"}
          </button>
        </form>
        <div className="login">
          <button className="btnfacebook">
            <img src={facebook} alt="icon"></img> <p>Facebook</p>
          </button>
          <button>
            <img src={google} alt="icon"></img> <p>Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
