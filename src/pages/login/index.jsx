import React, { Fragment, useState } from "react";
import loginApi from "../../api/loginApi";
import FormLogin from "../../components/formlogin";
import { ToastContainer, toast } from "react-toastify";

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
        response.isAuth
          ? toast.dark(`🎉🎉🎉 ${response.mess}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              onClose: () => (window.location.href = "/"),
            })
          : toast.error(`👌👌👌 ${response.mess}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
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
      <FormLogin
        type="login"
        handle={loginHandle}
        status={status}
        mess={mess}
      />
    </Fragment>
  );
};

export default Login;
