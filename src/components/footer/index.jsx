import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import facebook from "../../asset/img/facebook.svg";
import youtube from "../../asset/img/youtube.svg";
import twitter from "../../asset/img/twitter.svg";
import instagram from "../../asset/img/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="socialnetwork">
        <li>
          <a href="https://www.facebook.com/xuan.khanh.5203/">
            <img src={facebook} alt="icon"></img>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC3-G1mLiuC_mYKRypkQafTQ">
            <img src={youtube} alt="icon"></img>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/xuaankhanhs/">
            <img src={instagram} alt="icon"></img>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/lolesports">
            <img src={twitter} alt="icon"></img>
          </a>
        </li>
      </ul>
      <ul className="aboutus">
        <li>
          <Link to="#aboutus">Về chúng tôi</Link>
        </li>
        <li>
          <Link to="#contact">Liên lạc với chúng tôi</Link>
        </li>
        <li>
          <Link to="#book">Chính sách quyền riêng tư</Link>
        </li>
        <li>
          <Link to="#asd">Thỏa thuận</Link>
        </li>
        <li>
          <Link to="#down">Tải về</Link>
        </li>
      </ul>
      <p className="aboutme">
        Registered &reg; 2021-2022 By{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://trinhxuankhanh.github.io/cv/"
        >
          Tun
        </a>
      </p>
    </footer>
  );
};

export default Footer;
