import { useContext } from "react";
import { CallToAction1 } from "../components/CallToAction1";
import { Card } from "../components/Card";
import { Carrousel } from "../components/Carrousel";
import Description from "../components/Description";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Template1Context } from "../context/Template1Context";

export const TemplateScreen1 = () => {
  const { template2 } = useContext<any>(Template1Context);

  return (
    <>
      <Header />
      <Carrousel />
      <Description bgColor={"bg-white"} title={template2.titulo1} description={template2.descripcion1} />
      <Card data={template2} />
      <Description title={template2.titulo2} description={template2.descripcion2} />
      <CallToAction1 data={template2} />
      <Footer />
    </>
  );
};

export default TemplateScreen1;
