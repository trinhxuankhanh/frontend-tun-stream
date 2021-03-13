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
          <Link to="#fb">
            <img src={facebook} alt="icon"></img>
          </Link>
        </li>
        <li>
          <Link to="#yt">
            <img src={youtube} alt="icon"></img>
          </Link>
        </li>
        <li>
          <Link to="#in">
            <img src={instagram} alt="icon"></img>
          </Link>
        </li>
        <li>
          <Link to="#tw">
            <img src={twitter} alt="icon"></img>
          </Link>
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
        Copyright © 2021-2022 By{" "}
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
