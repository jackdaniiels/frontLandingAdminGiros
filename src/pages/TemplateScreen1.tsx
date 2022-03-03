import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallToAction1 } from "../components/CallToAction1";
import { Cards } from "../components/Cards";
import { Carrousel } from "../components/Carrousel";
import Description from "../components/Description";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import { getDataTemplate2 } from "../services/getDataTemplate2";

export const TemplateScreen1 = () => {
  const [data, setData] = useState<any>({});
  const [existData, setExistData] = useState<boolean>(false);
  const { id: param } = useParams();

  useEffect(() => {
    getDataTemplate2().then((dataResp: any) => {
      getDataByRouteParam(param, dataResp);
    });
  }, [param]);

  const getDataByRouteParam = (param: any, dataResp: any) => {
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

  // return (
  //   <><pre>{JSON.stringify(data, null,3)}</pre></>
  // )

  const {
    seccionCalltoAction,
    seccionCards,
    seccionMenu,
    seccionSlides,
    seccionTexto1,
    seccionTexto2,
    seccionTexto3,
    seccionFooter,
    slideBackgroundImg,
  } = data;

  return (
    <>
      {seccionMenu && <Header />}
      {seccionSlides && <Carrousel data={data} />}
      {seccionTexto1 && (
        <Description
          title={data?.titulo1}
          description={data?.descripcion1}
          className={"bg-white"}
          darkMode={false}
        />
      )}
      {seccionCards && <Cards data={data} />}
      {seccionTexto2 && (
        <Description
          title={data?.titulo2}
          description={data?.descripcion2}
          darkMode={true}
        />
      )}
      {seccionCalltoAction && (
        <CallToAction1
          data={data}
          title={data?.ctaTitulo1}
          description={data?.ctaDescripcion1}
          button={data?.ctaBoton1}
          img={data?.ctaImagen1?.data?.attributes?.url}
          link={data?.ctaLink1}
          target={data?.targetCta1}
        />
      )}
      {seccionTexto3 && (
        <Description
          title={data?.titulo2}
          description={data?.descripcion2}
          className={"my-5"}
        />
      )}
      {seccionFooter && <Footer />}
    </>
  );
};

export default TemplateScreen1;
