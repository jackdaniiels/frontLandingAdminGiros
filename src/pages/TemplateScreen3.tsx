import { useContext, useEffect, useState } from 'react';
import { CallToAction2 } from "../components/CallToAction2";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BgImg } from "../components/BgImg";
import { Cards2 } from "../components/Cards2";
import Description from "../components/Description";
import { CallToAction1 } from "../components/CallToAction1";
import { Form } from "../components/Form";
import { Form2 } from "../components/Form2";
import { useParams } from 'react-router-dom';
import { getDataTemplate3 } from '../services/getDataTemplate3';
import NotFoundPage from '../components/NotFoundPage';

export const TemplateScreen3 = () => {
  const [data, setData] = useState<any>({});
  const [existData, setExistData] = useState<boolean>(false);
  const { id: param } = useParams();

  useEffect(() => {
    getDataTemplate3().then((dataResp: any) => {
      getDataByRouteParam(param, dataResp);
    });
  }, [param]);

  const getDataByRouteParam = (param: any, dataResp: any) => {
    console.log(dataResp);
    if (dataResp && dataResp.length >= 1) {
      const filterData = dataResp.find(
        (item: any) => item["attributes"].url === param
      );
      if (filterData) {
        setExistData(true);
        setData(filterData.attributes);
      } else {
        setExistData(false);
      }
    } else {
      setExistData(true);
      setData(dataResp.attributes);
    }

    console.log("333", data);

  };

  if (!existData) {
    return (
      <>
        <NotFoundPage />
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
  } = data;
  return (
    <>
      {seccionMenu && <Header />}
      {seccionCta1 && (
        <div className="container bg-dark-none">
          <BgImg
            backgroundImg={data?.ctaBackgroundImg1?.data?.attributes?.url}
          >
            <div className="banner-cta">
              <CallToAction1
                data={data}
                title={data?.ctaTitulo1}
                description={data?.ctaDescripcion1}
                button={data?.ctaBoton1}
                img={data?.ctaImagen1?.data?.attributes?.url}
                link={data?.ctaLink1}
                target={data?.targetCta1}
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
              title={data?.titulo1}
              description={data?.descripcion1}
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
            backgroundImg={data?.ctaBackgroundImg2?.data?.attributes?.url}
          >
            <div className="banner-cta">
              <CallToAction2
                data={data}
                title={data?.ctaTitulo1}
                description={data?.ctaDescripcion1}
                button={data?.ctaBoton1}
                img={data?.ctaImagen1?.data?.attributes?.url}
                link={data?.ctaLink1}
                target={data?.targetCta1}
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
              title={data?.titulo2}
              description={data?.descripcion2}
              className={"bg-white"}
              darkMode={false}
            />
          </div>
        </div>
      )}

      {seccionCta3 && (
        <div className="container bg-dark-none">
          <BgImg
            backgroundImg={data?.ctaBackgroundImg3?.data?.attributes?.url}
          >
            <div className="banner-cta">
              <CallToAction1
                data={data}
                title={data?.ctaTitulo1}
                description={data?.ctaDescripcion1}
                button={data?.ctaBoton1}
                img={data?.ctaImagen1?.data?.attributes?.url}
                link={data?.ctaLink1}
                target={data?.targetCta1}
                darkMode={true}
                showButton={false}
              />
            </div>
            {seccionCards && <Cards2 data={data} />}
          </BgImg>
        </div>
      )}

      {seccionTexto3 && (
        <div className="container">
          <div className="banner-cta">
            <Description
              title={data?.titulo3}
              description={data?.descripcion3}
              className={"bg-white"}
              darkMode={false}
            />
          </div>
        </div>
      )}

      {seccionCta4 && (
        <div className="container bg-dark-none">
          <BgImg
            backgroundImg={data?.ctaBackgroundImg4?.data?.attributes?.url}
          >
            <div className="banner-cta">
              <CallToAction2
                data={data}
                title={data?.ctaTitulo1}
                description={data?.ctaDescripcion1}
                button={data?.ctaBoton1}
                img={data?.ctaImagen1?.data?.attributes?.url}
                link={data?.ctaLink1}
                target={data?.targetCta1}
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
              title={data?.titulo4}
              description={data?.descripcion4}
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
