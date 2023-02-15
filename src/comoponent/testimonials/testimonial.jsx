import React from "react";
import "./testimonial.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";
import { SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-wrapper">
        <div className="testimonial-container">
          <span>Top Rated</span>
          <span>
            Seeding say has suitable disposal and boy. Exercise joy man children
            rejoiced
          </span>
        </div>
        <img src={Hero} />
        <div className="testimonial-container">
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className="reviews">Reviews</div>

      <div className="carousal">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className="tcarousal"
          breakpoints={{
            856: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className="testimonial-data">
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
