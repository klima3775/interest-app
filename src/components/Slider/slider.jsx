import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss";
import Burger from "../../assets/img/background.png";

const Slider = () => {
  return (
    <div className="wrapper">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src={Burger} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Burger} alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Burger} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Burger} alt="Slide 4" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
