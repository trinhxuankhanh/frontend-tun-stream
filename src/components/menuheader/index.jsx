import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { DataContext } from "../../GlobalState";
import Btn from "../btn";
import Btnclick from "../btnclick";
import Search from "../search";
import "./style.scss";

const MenuHeader = () => {
  const state = useContext(DataContext);
  const [isAuth, setIsAuth] = state.auth;

  useEffect(() => {
    if (isAuth === null) setIsAuth(JSON.parse(localStorage.getItem("user")));
  }, [isAuth, setIsAuth]);
  const logoutHandle = () => {
    setIsAuth(null);
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <Nav className="menuheader" navbar>
      <NavItem>
        <Link to="/live/">Phát trực tiếp</Link>
        <Link to="/game/">Phân loại</Link>
      </NavItem>
      <NavItem>
        <Search />
      </NavItem>
      <NavItem className="row">
        {!isAuth && (
          <Fragment>
            <Btn content="Đăng nhập" component="/login" />
            <Btn content="Đăng kí" component="/register" />
          </Fragment>
        )}
        {isAuth && (
          <Fragment>
            <Btn content={isAuth.username} component={`/user/${isAuth._id}`} />
            <Btnclick content="Đăng xuất" click={logoutHandle} />
          </Fragment>
        )}
      </NavItem>
    </Nav>
  );
};

export default MenuHeader;
