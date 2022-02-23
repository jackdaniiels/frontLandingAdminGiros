import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CallToAction1 } from "../components/CallToAction1";
import { Cards } from "../components/Cards";
import { Carrousel } from "../components/Carrousel";
import Description from "../components/Description";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Template1Context } from "../context/Template1Context";
import { getDataTemplate1 } from "../services/getDataTemplate1";

export const TemplateScreen1 = () => {
  const { template2 } = useContext<any>(Template1Context);
  const [templateData, setTemplateData] = useState<any>({});
  const [data, setData] = useState<any>([]);
  const { id: param } = useParams();

  useEffect(() => {
    setTemplateData(template2);
  }, [template2]);


  useEffect(() => {
    getDataTemplate1().then((data: any) => {
      getDataByRouteParam(param);
    });
  }, [param]);

  const getDataByRouteParam = (param: any) => {
    // const filterData = data.find((item: any) => item.ruta === param);
    // console.log('filterData =>', filterData);
    // setData(filterData);
  };

  if (!template2) {
    return (
      <>
        <p>Servidor no disponible.</p>
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
  } = templateData;

  return (
    <>
      {seccionMenu && <Header />}
      {seccionSlides && <Carrousel />}
      {seccionTexto1 && (
        <Description
          title={template2?.titulo1}
          description={template2?.descripcion1}
          className={"bg-white"}
          darkMode={false}
        />
      )}
      {seccionCards && <Cards data={template2} />}
      {seccionTexto2 && (
        <Description
          title={template2?.titulo2}
          description={template2?.descripcion2}
          darkMode={true}
        />
      )}
      {seccionCalltoAction && (
        <CallToAction1
          data={template2}
          title={template2?.ctaTitulo1}
          description={template2?.ctaDescripcion1}
          button={template2?.ctaBoton1}
          img={template2?.ctaImagen1?.data?.attributes?.url}
          link={template2?.ctaLink1}
          target={template2?.targetCta1}
        />
      )}
      {seccionTexto3 && (
        <Description
          title={template2?.titulo2}
          description={template2?.descripcion2}
          className={"my-5"}
        />
      )}
      {seccionFooter && <Footer />}
    </>
  );
};

export default TemplateScreen1;
