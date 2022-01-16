import React, { useState } from "react";
import imgTest from "../assets/img/img-1.png";

export const Card = ({ data }: { data: any }) => {
  const [state, setstate] = useState([1, 2, 3, 4]);
  return (
    <div className="d-flex justify-content-center py-5">
      <div className="row container d-flex justify-content-center w-100">
        {state.map((item) => (
          <div key={item} className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
            <div className="d-flex justify-content-center">
              <img  src={`http://localhost:1337` + data?.imagenSlide1?.data?.attributes?.url || ''}  alt="" />
            </div>
            <p className="text-center mt-4">{data?.cardDescripcion1}</p>
            <div className="d-flex justify-content-center mb-5">
              <button className="btn-custom">{data?.cardBoton1}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
