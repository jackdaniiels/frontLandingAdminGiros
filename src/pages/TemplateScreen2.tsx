import { useContext, useEffect, useState } from "react";
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
import { getDataTemplate1 } from "../services/getDataTemplate1";
import { useParams } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";

export const TemplateScreen2 = () => {
  const [data, setData] = useState<any>({});
  const [existData, setExistData] = useState<boolean>(false);
  const { id: param } = useParams();

  useEffect(() => {
    getDataTemplate1().then((dataResp: any) => {
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
    seccionBanner,
    seccionCards,
    seccionCardsHorizontal,
    seccionSlidesTexto,
    seccionTitulo1,
    seccionTitulo2,
    showBoton1,
    seccionFooter,
    logo,
    server,
  } = data;
  return (
    <>
      {seccionMenu && <Header logo={server + logo?.data?.attributes?.url} />}
      {seccionBanner && (
        <div className="banner-cta">
          <CallToAction2
            server={server}
            data={data}
            title={data?.ctaTitulo1}
            description={data?.ctaDescripcion1}
            button={data?.ctaBoton1}
            img={data?.ctaImagen1?.data?.attributes?.url}
            link={data?.ctaLink1}
            target={data?.targetCta1}
          />
        </div>
      )}

      <div className="container bg-dark-disabled my-5">
        <BgImg
          server={server}
          backgroundImg={data?.backgroundImagen1?.data?.attributes?.url}
        >
          {seccionSlidesTexto && <CarrouselText data={data} />}
          {seccionCards && <Cards2 data={data} />}
        </BgImg>
      </div>

      {seccionTitulo1 && (
        <div className="my-4">
          <Description
            title={data?.titulo1}
            description={data?.descripcion1}
            className={"bg-white"}
            darkMode={false}
          />
        </div>
      )}

      {seccionCardsHorizontal && (
        <div className="container bg-dark-disabled">
          <BgImg
            server={server}
            backgroundImg={data?.backgroundImagen2?.data?.attributes?.url}
          >
            <div className="py-5">
              <Cards3 data={data} />
            </div>
          </BgImg>
        </div>
      )}

      {seccionTitulo2 && (
        <div className="my-4">
          <Description
            title={data?.titulo2}
            description={data?.descripcion2}
            className={"bg-white"}
            darkMode={false}
          />
        </div>
      )}

      {showBoton1 && (
        <div className="d-flex justify-content-center mb-5">
          <Button
            button={data?.boton1}
            link={data?.link1}
            target={data?.target1}
          />
        </div>
      )}
      {seccionFooter && <Footer logo={server + logo?.data?.attributes?.url} />}
    </>
  );
};

export default TemplateScreen2;
