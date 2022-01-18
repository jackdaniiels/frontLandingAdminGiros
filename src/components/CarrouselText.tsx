import { useContext } from "react";
import ".././App.scss";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from "swiper";
import { Template1Context } from "../context/Template1Context";
import Description from "./Description";

export const CarrouselText = () => {
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
        <SwiperSlide className="">
          <Description
            title={template2?.titulo2}
            description={template2?.descripcion2}
            darkMode={true}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Description
            title={template2?.titulo2}
            description={template2?.descripcion2}
            darkMode={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
