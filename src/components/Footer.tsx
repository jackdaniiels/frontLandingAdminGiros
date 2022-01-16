import React from "react";
import logoSlogan from "../assets/img/logo-slogan.svg";
import logoVigilado from "../assets/img/logo-vigilado.svg";

export const Footer = () => {
  return (
    <footer className="footer bg-yellow">
      <div className="container w-100">
        <div className="d-flex justify-content-between w-100 px-3">
          <div>
            <img
              src={logoVigilado}
              width="5"
              height="auto"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
          <div>
            <a className="navbar-brand" href="#">
              <img
                src={logoSlogan}
                height="auto"
                className="img-fluid logo d-inline-block align-top"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
