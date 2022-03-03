import { useContext } from "react";
import ".././App.scss";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import { Template1Context } from "../context/Template1Context";
import Description from "./Description";

export const CarrouselText = ({data}: {data: any}) => {

  const { slideBackgroundImg } = data;
  let count = 0;

  const backgroundImg = slideBackgroundImg?.data?.attributes?.url || "";

  const countActiveSliders = () => {
    const activeSliders = [
      "activarSlide1",
      "activarSlide2",
      "activarSlide3",
      "activarSlide4",
    ];
    count = Object.keys(data).filter((key) =>
      activeSliders.includes(key)
    ).length;
  };

  countActiveSliders();

  const delay: number = data?.autoplayDelay
    ? Number(`${data?.autoplayDelay}000`)
    : 0;
  SwiperCore.use([Keyboard, Autoplay, Navigation]);

  return (
    <div className="px-5 mx-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper py-5"
      >
        {data?.activarSlide1 && (
          <SwiperSlide className="">
            <Description
              title={data?.tituloSlide1}
              description={data?.descripcionSlide1}
              darkMode={true}
              bgDark={false}
            />
          </SwiperSlide>
        )}
        {data?.activarSlide2 && (
          <SwiperSlide className="">
            <Description
              title={data?.tituloSlide2}
              description={data?.descripcionSlide2}
              darkMode={true}
              bgDark={false}
            />
          </SwiperSlide>
        )}
        {data?.activarSlide3 && (
          <SwiperSlide className="">
            <Description
              title={data?.tituloSlide3}
              description={data?.descripcionSlide3}
              darkMode={true}
              bgDark={false}
            />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};
