import imgTest from "../assets/img/img-1.png";
import { Card3 } from "./Card3";

export const Cards3 = ({ data }: { data: any }) => {
  const { activarCard1, activarCard2, activarCard3, activarCard4 } = data;
  return (
    <div className="row m-5">
      {activarCard1 && (
        <Card3
          key={1}
          img={data.cardImagen1?.data?.attributes?.url}
          description={data?.cardDescripcion1}
        />
      )}
      {activarCard2 && (
        <Card3
          key={2}
          img={data.cardImagen2?.data?.attributes?.url}
          description={data?.cardDescripcion2}
        />
      )}
      {activarCard3 && (
        <Card3
          key={3}
          img={data.cardImagen3?.data?.attributes?.url}
          description={data?.cardDescripcion3}
        />
      )}
      {activarCard4 && (
        <Card3
          key={4}
          img={data.cardImagen3?.data?.attributes?.url}
          description={data?.cardDescripcion3}
        />
      )}
    </div>
  );
};
