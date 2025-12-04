import testimonialImg from "../../assets/images/testimonial.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import "./TestimonialSection.css";

export default function TestimonialSection() {
  return (
    <section id="testimonial-sec" className="testimonial-section">
      <div className="site-container">
        <h2 className="site-title-h2 section-title">Testimonials</h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={60}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="testimonial-slider"
          loop={true} 
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <img src={testimonialImg} alt="testimonial" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={testimonialImg} alt="testimonial" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={testimonialImg} alt="testimonial" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={testimonialImg} alt="testimonial" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={testimonialImg} alt="testimonial" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
