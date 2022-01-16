import React, { useContext, useState } from "react";
import ".././App.scss";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import SwiperCore, { Pagination } from "swiper";
import { CallToAction2 } from "./CallToAction2";
import { CallToAction1 } from "./CallToAction1";
import { Template1Context } from "../context/Template1Context";
SwiperCore.use([Pagination]);

export const Carrousel = () => {
  const [state, setstate] = useState([]);

  const { template2 } = useContext<any>(Template1Context);
  console.log('carrousel', template2);

  const getSlides = () => {
    const slides = ['Slide1', 'Slide2', 'Slide3'];
    const elements = ['titulo', 'descripcion', 'boton', 'imagen'];

    const slidesArray = slides.map((slide, index) => `${elements[index]}${slide}`);
    console.log('slidesArray', slidesArray);
    
  }

  getSlides();

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <CallToAction2 data={template2} />
        </SwiperSlide>
        <SwiperSlide>
          <CallToAction1 data={template2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
