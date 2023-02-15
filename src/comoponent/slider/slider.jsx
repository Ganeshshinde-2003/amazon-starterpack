import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// import swipper style built in
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductsData } from "../../data/products";
import "./slider.css";

const Slider = () => {
  return (
    <div className="s-conatiner">
      <Swiper
        modules={[Pagination, Navigation]}
        className="myswiper"
        loopFillGroupWithBlank={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={3}
        loop={true}
        breakpoints={{ 640: { slidesPerView: 3 }, 0: { slidesPerView: 1 } }}
      >
        {ProductsData.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div className="shop">Shop now</div>
            </div>
            <img src={slide.img} className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
