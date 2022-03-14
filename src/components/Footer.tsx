import React from "react";
import logoSlogan from "../assets/img/logo-slogan.svg";
import logoVigilado from "../assets/img/logo-vigilado.svg";

export const Footer = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-start center-on-mobile">
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
