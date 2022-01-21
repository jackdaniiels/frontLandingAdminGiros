import { useContext } from "react";
import { CallToAction2 } from "../components/CallToAction2";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Template1Context } from "../context/Template1Context";
import { BgImg } from "../components/BgImg";
import { CarrouselText } from "../components/CarrouselText";
import { Cards2 } from "../components/Cards2";
import Description from "../components/Description";
import { Button } from "../components/Button";
import { Cards3 } from "../components/Cards3";

export const TemplateScreen2 = () => {
  const { template1 } = useContext<any>(Template1Context);

  const {
    seccionMenu,
    seccionBanner,
    seccionCards,
    seccionCardsHorizontal,
    seccionSlidesTexto,
    seccionTitulo1,
    seccionTitulo2,
    showBoton1,
    seccionFooter,
  } = template1;
  return (
    <>
      {seccionMenu && <Header />}
      {seccionBanner && (
        <div className="banner-cta">
          <CallToAction2
            data={template1}
            title={template1?.ctaTitulo1}
            description={template1?.ctaDescripcion1}
            button={template1?.ctaBoton1}
            img={template1?.ctaImagen1?.data?.attributes?.url}
            link={template1?.ctaLink1}
            target={template1?.targetCta1}
          />
        </div>
      )}

      <div className="container bg-dark-disabled my-5">
        <BgImg
          backgroundImg={template1?.backgroundImagen1?.data?.attributes?.url}
        >
          {seccionSlidesTexto && <CarrouselText />}
          {seccionCards && <Cards2 data={template1} />}
        </BgImg>
      </div>

      {seccionTitulo1 && (
        <div className="my-4">
          <Description
            title={template1?.titulo1}
            description={template1?.descripcion1}
            className={"bg-white"}
            darkMode={false}
          />
        </div>
      )}

      {seccionCardsHorizontal && (
        <div className="container bg-dark-disabled">
          <BgImg
            backgroundImg={template1?.backgroundImagen2?.data?.attributes?.url}
          >
            <div className="py-5">
              <Cards3 data={template1} />
            </div>
          </BgImg>
        </div>
      )}

      {seccionTitulo2 && (
        <div className="my-4">
          <Description
            title={template1?.titulo2}
            description={template1?.descripcion2}
            className={"bg-white"}
            darkMode={false}
          />
        </div>
      )}

      {showBoton1 && (
        <div className="d-flex justify-content-center mb-5">
          <Button
            button={template1?.boton1}
            link={template1?.link1}
            target={template1?.target1}
          />
        </div>
      )}
      {seccionFooter && <Footer />}
    </>
  );
};

export default TemplateScreen2;
