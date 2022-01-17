import React from "react";
// import styles from '../styles/styles.module.scss';
import "../styles/module.scss";
import logoVigilado from "../assets/img/logo-vigilado.svg";
import logoSlogan from "../assets/img/logo-slogan.svg";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-start">
        <div>
          <img
            src={logoVigilado}
            width="5"
            height="auto"
            className="d-inline-block align-top"
            alt="logo-vigilado"
          />
        </div>
        <div className="mx-5">
          <a className="navbar-brand" href="#">
            <img
              src={logoSlogan}
              height="auto"
              className="img-fluid logo d-inline-block align-top"
              alt="logo-slogan"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
