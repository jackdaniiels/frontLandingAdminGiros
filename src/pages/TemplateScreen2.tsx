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
import { Cards3 } from '../components/Cards3';

export const TemplateScreen2 = () => {
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
      <div className="banner-cta">
        <CallToAction2
          data={template2}
          title={template2?.ctaTitulo1}
          description={template2?.ctaDescripcion1}
          button={template2?.ctaBoton1}
          img={template2?.ctaImagen1?.data?.attributes?.url}
          link={template2?.ctaLink1}
          target={template2?.targetCta1}
        />
      </div>
      <div className="container bg-dark py-5">
        <BgImg>
          <CarrouselText />
          <Cards2 data={template2} />
        </BgImg>
      </div>
      <div className="my-4">
        <Description
          title={template2?.titulo1}
          description={template2?.descripcion1}
          className={"bg-white"}
          darkMode={false}
        />
      </div>
      <div className="container bg-dark py-5">
        <BgImg>
            <Cards3 data={template2}/>
        </BgImg>
      </div>
      <div className="my-4">
        <Description
          title={template2?.titulo1}
          description={template2?.descripcion1}
          className={"bg-white"}
          darkMode={false}
        />
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Button button="Lorem ipsun" link="eeee" target="jfjfj" />
      </div>
      {seccionFooter && <Footer />}
    </>
  );
};

export default TemplateScreen2;
