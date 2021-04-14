import React, { Fragment, useState } from "react";
import registerApi from "../../api/registerApi";
import FormLogin from "../../components/formlogin";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [mess, setMess] = useState("");
  const handleRegister = (data) => {
    registerApi
      .addUser(data)
      .then((response) => {
        console.log(response);
        setMess(response.mess);

        if (response.status) {
          toast.dark(`🎉🎉🎉 ${response.mess}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => {
              window.location.href = "/login";
            },
          });
        } else {
          toast.error(`🎉🎉🎉 ${response.mess}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
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
      <FormLogin type="register" mess={mess} handle={handleRegister} />
    </Fragment>
  );
};

export default Register;
