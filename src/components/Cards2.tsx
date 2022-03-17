import { Card2 } from "./Card2";

export const Cards2 = ({ data }: { data: any }) => {
  const { activarCard1, activarCard2, activarCard3, server } = data;

  return (
    <div className="d-flex justify-content-center py-5">
      <div className="row container d-flex justify-content-center w-100">
        {activarCard1 && (
          <Card2
            server={server}
            key={1}
            img={data.cardImagen1?.data?.attributes?.url}
            description={data?.cardDescripcion1}
          />
        )}
        {activarCard2 && (
          <Card2
            server={server}
            key={2}
            img={data.cardImagen2?.data?.attributes?.url}
            description={data?.cardDescripcion2}
          />
        )}
        {activarCard3 && (
          <Card2
            server={server}
            key={3}
            img={data.cardImagen3?.data?.attributes?.url}
            description={data?.cardDescripcion3}
          />
        )}
      </div>
    </div>
  );
};
