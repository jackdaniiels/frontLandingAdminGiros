import { useContext } from "react";
import { CallToAction2 } from "../components/CallToAction2";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Template1Context } from "../context/Template1Context";
import { BgImg } from "../components/BgImg";
import { Cards2 } from "../components/Cards2";
import Description from "../components/Description";
import { CallToAction1 } from "../components/CallToAction1";
import { Form } from "../components/Form";

export const TemplateScreen3 = () => {
  const { template3 } = useContext<any>(Template1Context);

  const {
    seccionCalltoAction,
    seccionCards,
    seccionMenu,
    seccionSlides,
    seccionCta1,
    seccionCta2,
    seccionCta3,
    seccionTexto1,
    seccionTexto2,
    seccionTexto3,
    seccionTexto4,
    seccionFooter,
  } = template3;
  return (
    <>
      {seccionMenu && <Header />}
      <div className="container bg-dark-none">
        <BgImg
          backgroundImg={template3?.ctaBackgroundImg1?.data?.attributes?.url}
        >
          <div className="banner-cta">
            <CallToAction2
              data={template3}
              title={template3?.ctaTitulo1}
              description={template3?.ctaDescripcion1}
              button={template3?.ctaBoton1}
              img={template3?.ctaImagen1?.data?.attributes?.url}
              link={template3?.ctaLink1}
              target={template3?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
        </BgImg>
      </div>

      <div className="container py-5">
        <Description
          title={template3?.titulo1}
          description={template3?.descripcion1}
          className={"bg-white"}
          darkMode={false}
        />
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6">
            <Form />
          </div>
        </div>
      </div>

      <div className="container bg-dark-none">
        <BgImg
          backgroundImg={template3?.ctaBackgroundImg2?.data?.attributes?.url}
        >
          <div className="banner-cta">
            <CallToAction1
              data={template3}
              title={template3?.ctaTitulo1}
              description={template3?.ctaDescripcion1}
              button={template3?.ctaBoton1}
              img={template3?.ctaImagen1?.data?.attributes?.url}
              link={template3?.ctaLink1}
              target={template3?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
        </BgImg>
      </div>

      <div className="container py-5">
        <div className="banner-cta">
          <Description
            title={template3?.titulo2}
            description={template3?.descripcion2}
            className={"bg-white"}
            darkMode={false}
          />
        </div>
      </div>

      <div className="container bg-dark-none">
        <BgImg
          backgroundImg={template3?.ctaBackgroundImg3?.data?.attributes?.url}
        >
          <div className="banner-cta">
            <CallToAction2
              data={template3}
              title={template3?.ctaTitulo1}
              description={template3?.ctaDescripcion1}
              button={template3?.ctaBoton1}
              img={template3?.ctaImagen1?.data?.attributes?.url}
              link={template3?.ctaLink1}
              target={template3?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
          <Cards2 data={template3} />
        </BgImg>
      </div>

      <div className="container py-5">
        <div className="banner-cta">
          <Description
            title={template3?.titulo3}
            description={template3?.descripcion3}
            className={"bg-white"}
            darkMode={false}
          />
        </div>
      </div>

      <div className="container bg-dark-none">
        <BgImg
          backgroundImg={template3?.ctaBackgroundImg4?.data?.attributes?.url}
        >
          <div className="banner-cta">
            <CallToAction1
              data={template3}
              title={template3?.ctaTitulo1}
              description={template3?.ctaDescripcion1}
              button={template3?.ctaBoton1}
              img={template3?.ctaImagen1?.data?.attributes?.url}
              link={template3?.ctaLink1}
              target={template3?.targetCta1}
              darkMode={true}
              showButton={false}
            />
          </div>
        </BgImg>
      </div>

      <div className="container py-5">
        <Description
          title={template3?.titulo4}
          description={template3?.descripcion4}
          className={"bg-white"}
          darkMode={false}
        />
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6">
            <Form />
          </div>
        </div>
      </div>

      {seccionFooter && <Footer />}
    </>
  );
};

export default TemplateScreen3;
