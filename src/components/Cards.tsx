import React from "react";
import { Card } from "./Card";

export const Cards = ({ data }: { data: any }) => {
  const {
    activarCard1,
    activarCard2,
    activarCard3,
    activarCard4,
    activarCard5,
    targetCard1,
    targetCard2,
    targetCard3,
    targetCard4,
    targetCard5,
    server,
  } = data;

  return (
    <div className="d-flex justify-content-center py-5">
      <div className="row container d-flex justify-content-center w-100">
        {activarCard1 && (
          <Card
            server={server}
            key={1}
            img={data.cardImagen1?.data?.attributes?.url}
            description={data?.cardDescripcion1}
            link={data?.cardLink1}
            button={data?.cardBoton1}
            target={targetCard1}
          />
        )}
        {activarCard2 && (
          <Card
            server={server}
            key={2}
            img={data.cardImagen2?.data?.attributes?.url}
            description={data?.cardDescripcion2}
            link={data?.cardLink2}
            button={data?.cardBoton2}
            target={targetCard2}
          />
        )}
        {activarCard3 && (
          <Card
            server={server}
            key={3}
            img={data.cardImagen3?.data?.attributes?.url}
            description={data?.cardDescripcion3}
            link={data?.cardLink3}
            button={data?.cardBoton3}
            target={targetCard3}
          />
        )}
        {activarCard4 && (
          <Card
            server={server}
            key={4}
            img={data.cardImagen4?.data?.attributes?.url}
            description={data?.cardDescripcion4}
            link={data?.cardLink4}
            button={data?.cardBoton4}
            target={targetCard4}
          />
        )}
        {activarCard5 && (
          <Card
            server={server}
            key={5}
            img={data.cardImagen5?.data?.attributes?.url}
            description={data?.cardDescripcion5}
            link={data?.cardLink5}
            button={data?.cardBoton5}
            target={targetCard5}
          />
        )}
      </div>
    </div>
  );
};
