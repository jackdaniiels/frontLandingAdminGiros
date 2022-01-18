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
import { CallToAction1 } from "../components/CallToAction1";

export const TemplateScreen3 = () => {
  const { template2 } = useContext<any>(Template1Context);
  const {
    seccionCalltoAction,
    seccionCards,
    seccionMenu,
    seccionSlides,
    seccionTexto1,
    seccionTexto2,
    seccionTexto3,
    seccionFooter,
  } = template2;
  return (
    <>
      {seccionMenu && <Header />}
      <div className="container bg-dark py-5">
        <BgImg>
          <div className="banner-cta">
            <CallToAction2
              data={template2}
              title={template2?.ctaTitulo1}
              description={template2?.ctaDescripcion1}
              button={template2?.ctaBoton1}
              img={template2?.ctaImagen1?.data?.attributes?.url}
              link={template2?.ctaLink1}
              target={template2?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
        </BgImg>
      </div>

      <div className="container bg-dark py-5">
        <BgImg>
          <div className="banner-cta">
            <CallToAction1
              data={template2}
              title={template2?.ctaTitulo1}
              description={template2?.ctaDescripcion1}
              button={template2?.ctaBoton1}
              img={template2?.ctaImagen1?.data?.attributes?.url}
              link={template2?.ctaLink1}
              target={template2?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
        </BgImg>
      </div>

      <div className="container py-5">
        <BgImg>
          <div className="banner-cta">
            <Description
              title={template2?.titulo1}
              description={template2?.descripcion1}
              className={"bg-white"}
              darkMode={false}
            />
          </div>
        </BgImg>
      </div>

      <div className="container bg-dark py-5">
        <BgImg>
          <div className="banner-cta">
            <CallToAction2
              data={template2}
              title={template2?.ctaTitulo1}
              description={template2?.ctaDescripcion1}
              button={template2?.ctaBoton1}
              img={template2?.ctaImagen1?.data?.attributes?.url}
              link={template2?.ctaLink1}
              target={template2?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
          <Cards2 data={template2} />
        </BgImg>
      </div>

      <div className="container py-5">
        <BgImg>
          <div className="banner-cta">
            <Description
              title={template2?.titulo1}
              description={template2?.descripcion1}
              className={"bg-white"}
              darkMode={false}
            />
          </div>
        </BgImg>
      </div>

      <div className="container bg-dark py-5">
        <BgImg>
          <div className="banner-cta">
            <CallToAction1
              data={template2}
              title={template2?.ctaTitulo1}
              description={template2?.ctaDescripcion1}
              button={template2?.ctaBoton1}
              img={template2?.ctaImagen1?.data?.attributes?.url}
              link={template2?.ctaLink1}
              target={template2?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
        </BgImg>
      </div>

      {seccionFooter && <Footer />}
    </>
  );
};

export default TemplateScreen3;
