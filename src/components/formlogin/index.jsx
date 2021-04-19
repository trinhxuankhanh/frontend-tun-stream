import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Textbox } from "react-inputs-validation";
import { Link } from "react-router-dom";
import loginFacebookApi from "../../api/loginFacebookApi";
import loginWithFacebookApi from "../../api/loginWithFacebookApi";
import Logo from "../logo";
import "./style.scss";
import { ToastContainer, toast } from "react-toastify";

const FormLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [phone, setPhone] = useState("");
  const [mess, setMess] = useState("");

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

  const responseFacebook = (response) => {
    loginWithFacebookApi
      .addUser(response)
      .then((res) => {
        setMess(response);
        loginFacebookApi.addUser(response.email).then((response) => {
          localStorage.setItem("user", JSON.stringify(response.user));
          toast.dark(`🎉🎉🎉 ${response.mess}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => (window.location.href = "/"),
          });
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      handle({ username: nickName, email: username, password, phone });
    }

    setNickName("");
    setUsername("");
    setPassword("");
    setPhone("");
  };
  return (
    <div className="formlogin">
      {mess !== "" && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
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
              maxLength="30"
              className="content__repass"
              value={nickName}
              onChange={handleNickName}
              placeholder="Tên đăng kí"
              pattern={"^[a-zA-Z0-9]{4,10}$"}
            ></input>
          )}
          {type === "register" && (
            <Textbox
              className="content__repass"
              value={phone}
              onChange={(name) => setPhone(name)}
              attributesInput={{
                type: "text",
                placeholder: "Điện thoại",
                maxLength: "10",
              }}
              validationOption={{
                type: "number",
                reg: /[0-9]/,
                required: true,
                regMsg: "Phải là số  không có chữ và kí tự đặc biệt",
              }}
            />
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
            placeholder="Mật khẩu"
            value={password}
            onChange={handlePassWord}
          ></input>

          <button className="btn btn-block">
            {type === "register" ? "Đăng kí" : "Đăng nhập"}
          </button>
        </form>
        {type === "login" && (
          <div className="login">
            <FacebookLogin
              appId="278782940405979"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile, email"
              callback={responseFacebook}
              icon="fa-facebook"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormLogin;
