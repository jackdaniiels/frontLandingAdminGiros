import React from "react";
import { CardInterface } from "../interfaces/card.interface";

export const Card3 = ({
  idx,
  img,
  description,
  darkMode = false,
  server = "",
}: CardInterface) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-2">
      <div className="card">
        <div className="card-body d-flex justify-content-center align-items-center">
          <img src={`${server}` + img || ""} alt="" />
          <p className="card-text mx-4">{description}</p>
        </div>
      </div>
    </div>
  );
};
