import imgTest from "../assets/img/img-1.png";
import { Card3 } from "./Card3";

export const Cards3 = ({ data }: { data: any }) => {
  const { activarCardHorizontal1, activarCardHorizontal2,  activarCardHorizontal3, activarCardHorizontal4, server } = data;

  return (
    <div className="row m-5">
      {activarCardHorizontal1 && (
        <Card3
          server={server}
          key={1}
          img={data?.cardHorizontalImagen1?.data?.attributes?.url}
          description={data?.cardHorizontalDescripcion1}
        />
      )}
      {activarCardHorizontal2 && (
        <Card3
          server={server}
          key={2}
          img={data?.cardHorizontalImagen2?.data?.attributes?.url}
          description={data?.cardHorizontalDescripcion2}
        />
      )}
      {activarCardHorizontal3 && (
        <Card3
          server={server}
          key={3}
          img={data?.cardHorizontalImagen3?.data?.attributes?.url}
          description={data?.cardHorizontalDescripcion3}
        />
      )}
      {activarCardHorizontal4 && (
        <Card3
          server={server}
          key={4}
          img={data?.cardHorizontalImagen4?.data?.attributes?.url}
          description={data?.cardHorizontalDescripcion4}
        />
      )}
    </div>
  );
};
