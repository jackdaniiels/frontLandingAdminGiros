import React, { useContext, useState } from "react";
import ".././App.scss";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { CallToAction2 } from "./CallToAction2";
import { CallToAction1 } from "./CallToAction1";
import { Template1Context } from "../context/Template1Context";
import { Navigation } from "../routes/Navigation";

export const Carrousel = () => {
  const { template2 } = useContext<any>(Template1Context);
  const { slideBackgroundImg } = template2;
  let count = 0;

  const backgroundImg = slideBackgroundImg?.data?.attributes?.url || "";

  const countActiveSliders = () => {
    const activeSliders = [
      "activarSlide1",
      "activarSlide2",
      "activarSlide3",
      "activarSlide4",
    ];
    count = Object.keys(template2).filter((key) =>
      activeSliders.includes(key)
    ).length;
  };

  countActiveSliders();

  const delay: number = template2?.autoplayDelay
    ? Number(`${template2?.autoplayDelay}000`)
    : 0;
  SwiperCore.use([delay > 0 && Autoplay, count >= 1 && Pagination, Navigation]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: Number(delay),
          disableOnInteraction: false,
        }}
        className="mySwiper fullscreen-img"
        style={{
          backgroundImage: `url(http://localhost:1337${backgroundImg})`,
        }}
      >
        <SwiperSlide>
          <CallToAction2
            data={template2}
            title={template2?.tituloSlide1}
            description={template2?.descripcionSlide1}
            button={template2?.botonSlide1}
            img={template2?.imagenSlide1?.data?.attributes?.url}
            link={template2?.linkSlide1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CallToAction1
            data={template2}
            title={template2?.tituloSlide2}
            description={template2?.descripcionSlide2}
            button={template2?.botonSlide2}
            img={template2?.imagenSlide2?.data?.attributes?.url}
            link={template2?.linkSlide2}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
