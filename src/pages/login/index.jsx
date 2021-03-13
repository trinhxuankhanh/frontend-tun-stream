import React, { useState } from "react";
import loginApi from "../../api/loginApi";
import FormLogin from "../../components/formlogin";

const Login = () => {
  const [status, setStatus] = useState(false);
  const [mess, setMess] = useState("");

  const loginHandle = (data) => {
    loginApi
      .getUser(data)
      .then((response) => {
        setMess(response.mess);
        setStatus(response.isAuth);
        localStorage.setItem("user", JSON.stringify(response.user));
      })
      .catch((err) => console.log(err));
  };

  if (status) window.location.href = "/";

  return (
    <FormLogin type="login" handle={loginHandle} status={status} mess={mess} />
  );
};

export default Login;
