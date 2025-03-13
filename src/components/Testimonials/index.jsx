import "./Testimonials.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="section_wrapper">
        <div className="section_header">
          <h2 className="shine Topic">Testimonial</h2>
        </div>
        <Swiper
          slidesPerView={1} // Fixed typo
          spaceBetween={40}
          autoplay={{ delay: 3000 }} // Fixed lowercase
          loop={true}
          speed={3000}
          modules={[Autoplay]}
          breakpoints={{ 700: { slidesPerView: 2 } }} // Fixed spelling
        >
          {testimonials?.length > 0 ? (
            testimonials.map(({ avatar, name, review }, index) => (
              <SwiperSlide className="card testimonial" key={index}>
                <div className="avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h3 className="name">{name}</h3>
                <p className="review text_muted">{review}</p>
              </SwiperSlide>
            ))
          ) : (
            <p>No testimonials available</p>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
