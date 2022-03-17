import ".././App.scss";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { CallToAction2 } from "./CallToAction2";
import { CallToAction1 } from "./CallToAction1";
import { Navigation } from "../routes/Navigation";

export const CarrouselbgFullImg = ({ data }: {data: any}) => {
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
          backgroundImage: `url(${data?.server}${backgroundImg})`,
        }}
      >
        <SwiperSlide>
          <CallToAction2
            server={data?.server}
            data={data}
            title={data?.tituloSlide1}
            description={data?.descripcionSlide1}
            button={data?.botonSlide1}
            img={data?.imagenSlide1?.data?.attributes?.url}
            link={data?.linkSlide1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CallToAction1
            server={data?.server}
            data={data}
            title={data?.tituloSlide2}
            description={data?.descripcionSlide2}
            button={data?.botonSlide2}
            img={data?.imagenSlide2?.data?.attributes?.url}
            link={data?.linkSlide2}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
