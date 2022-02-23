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
import { Form2 } from "../components/Form2";

export const TemplateScreen3 = () => {
  const { template3 } = useContext<any>(Template1Context);
  // const template3 = data['template3'][0].attributes;

  if (!template3) {
    return (
      <>
        <p>Servidor no disponible.</p>
      </>
    );
  }

  const {
    seccionMenu,
    seccionTexto1,
    activarFormulario1,
    activarFormulario2,
    seccionCards,
    seccionCta1,
    seccionCta2,
    seccionCta3,
    seccionCta4,
    seccionTexto2,
    seccionTexto3,
    seccionTexto4,
    seccionFooter,
    formulario1,
    formulario2,
  } = template3;
  return (
    <>
      {seccionMenu && <Header />}
      {seccionCta1 && (
        <div className="container bg-dark-none">
          <BgImg
            backgroundImg={template3?.ctaBackgroundImg1?.data?.attributes?.url}
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
      )}

      {activarFormulario1 && (
        <div className="container py-5">
          {seccionTexto1 && (
            <Description
              title={template3?.titulo1}
              description={template3?.descripcion1}
              className={"bg-white"}
              darkMode={false}
            />
          )}
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6">
              {formulario1 === "formulario" ? <Form /> : <Form2 />}
            </div>
          </div>
        </div>
      )}

      {seccionCta2 && (
        <div className="container bg-dark-none">
          <BgImg
            backgroundImg={template3?.ctaBackgroundImg2?.data?.attributes?.url}
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
      )}

      {seccionTexto2 && (
        <div className="container">
          <div className="banner-cta">
            <Description
              title={template3?.titulo2}
              description={template3?.descripcion2}
              className={"bg-white"}
              darkMode={false}
            />
          </div>
        </div>
      )}

      {seccionCta3 && (
        <div className="container bg-dark-none">
          <BgImg
            backgroundImg={template3?.ctaBackgroundImg3?.data?.attributes?.url}
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
            {seccionCards && <Cards2 data={template3} />}
          </BgImg>
        </div>
      )}

      {seccionTexto3 && (
        <div className="container">
          <div className="banner-cta">
            <Description
              title={template3?.titulo3}
              description={template3?.descripcion3}
              className={"bg-white"}
              darkMode={false}
            />
          </div>
        </div>
      )}

      {seccionCta4 && (
        <div className="container bg-dark-none">
          <BgImg
            backgroundImg={template3?.ctaBackgroundImg4?.data?.attributes?.url}
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
      )}

      {activarFormulario2 && (
        <div className="container py-5">
          {seccionTexto4 && (
            <Description
              title={template3?.titulo4}
              description={template3?.descripcion4}
              className={"bg-white"}
              darkMode={false}
            />
          )}
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6">
              {formulario2 === "formulario" ? <Form /> : <Form2 />}
            </div>
          </div>
        </div>
      )}

      {seccionFooter && <Footer />}
    </>
  );
};

export default TemplateScreen3;
