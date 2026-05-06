import React from "react";
import pandaFace from "../images/panda_face.png";
import pandaTitle from "../images/panda_title.png";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav className="gnb">
        <div className="container">
          <div className="nav-left">
            <Link to="/" className="logo">
              <img src={pandaFace} alt="logo image" className="logo-image" />
              <img src={pandaTitle} alt="logo text" className="logo-text" />
            </Link>
            <div className="nav-options">
              <NavLink
                to="/asdfTODOT"
                className={({ isActive }) =>
                  `${styles.option} ${isActive ? styles.navActive : ""} `
                }
                alt="자유게시판으로 이동"
              >
                자유게시판
              </NavLink>
              <NavLink
                to="/items"
                className={({ isActive }) =>
                  `${styles.option} ${isActive ? styles.navActive : ""} `
                }
                alt="중고마켓으로 이동"
              >
                중고마켓
              </NavLink>
            </div>
          </div>

          <Link to="/auth/login" className="login-button">
            <div>로그인</div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
