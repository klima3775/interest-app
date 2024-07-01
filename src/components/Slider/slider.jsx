import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.scss";
import Fon from "../../assets/img/Rectangle 143.jpg";

const Slider = () => {
  return (
    <div className="wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          // Когда ширина экрана >= 320px
          320: {
            slidesPerView: 1,
          },
          // Когда ширина экрана >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Когда ширина экрана >= 768px
          768: {},
          // Когда ширина экрана >= 1024px
          1024: {},
        }}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src={Fon} alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Fon} alt="Slide 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Fon} alt="Slide 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src={Fon} alt="Slide 4" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
