import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import getUserApi from "../../api/getUserApi";
import Footer from "../../components/footer";
import Header from "../../components/header";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const auth = JSON.parse(localStorage.getItem("user"));

  if (auth === null) window.location.href = "/login";

  useEffect(() => {
    getUserApi
      .getUserById(id)
      .then((response) => {
        setUser(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">{user && <p>{user.username}</p>}</div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UpdateUser;
