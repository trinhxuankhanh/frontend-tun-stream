import React, { useState } from "react";
import registerApi from "../../api/registerApi";
import FormLogin from "../../components/formlogin";

const Register = () => {
  const [mess, setMess] = useState("");
  const handleRegister = (data) => {
    registerApi
      .addUser(data)
      .then((response) => setMess(response.mess))
      .catch((err) => console.log(err));
  };

  if (mess === "pass") window.location.href = "/login";

  return <FormLogin type="register" mess={mess} handle={handleRegister} />;
};

export default Register;
