import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import getUserApi from "../../api/getUserApi";
import Btn from "../../components/btn";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UploadAvt from "../../components/uploadavt";
import check from "../../asset/img/check.svg";
import back from "../../asset/img/back.svg";
import "./style.scss";
import Btnclick from "../../components/btnclick";
import postUpdateUserApi from "../../api/postUpdateUserApi";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const auth = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState(null);

  if (auth === null) window.location.href = "/login";

  useEffect(() => {
    getUserApi
      .getUserById(id)
      .then((response) => {
        setUser(response);

        setName(response.username);
        setPhone(response.phone);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleOnSubmit = () => {
    if (url.preview === null) {
      return alert("Không được để hình ảnh đại diện trống");
    } else {
      postUpdateUserApi.post({ name, phone, avt: url.preview }, id);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row user">
          <div className="col-12">
            {user && (
              <ul className="updateuser">
                <li>
                  <UploadAvt src={auth.avt} seturl={setUrl} />
                </li>
                <li className="d-flex flex-column flex-md-row">
                  <span>Tên người dùng</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </li>
                <li className="d-flex flex-column flex-md-row">
                  <span>Điện thoại</span>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </li>
                <li className="d-flex">
                  <Btnclick
                    content={"Đồng ý tất cả các thay đổi trên"}
                    icon={check}
                    click={handleOnSubmit}
                  />
                </li>
                <li className="d-flex">
                  <Btn
                    content={"Quay lại"}
                    component={`/user/${id}`}
                    icon={back}
                  />
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UpdateUser;
