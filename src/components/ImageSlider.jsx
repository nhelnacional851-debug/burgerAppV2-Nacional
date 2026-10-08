import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.png";
import burger4 from "../assets/burger4.png";
import burger5 from "../assets/burger5.png";
import burger6 from "../assets/burger6.png";

export default function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000, // 2 seconds per slide
          disableOnInteraction: false,
        }}
        speed={800} // smooth transition speed
        className="burger-slider"
      >
        <SwiperSlide>
          <img src={burger1} alt="Classic Beef Burger" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={burger2} alt="Cheese Melt Burger" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={burger3} alt="Bacon Crunch Burger" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={burger4} alt="Spicy Fire Burger" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={burger5} alt="Mushroom Swiss Burger" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={burger6} alt="Double Stack Burger" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
