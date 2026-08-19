import "./Testimonials.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { achievements } from "../../data";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="achievements">
      <div className="section_wrapper">
        <div className="section_header">
          <h2 className="shine Topic">Certifications &amp; Achievements</h2>
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
          {achievements?.length > 0 ? (
            achievements.map(({ avatar, name, review }, index) => (
              <SwiperSlide className="card testimonial" key={index}>
                <div className="avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h3 className="name">{name}</h3>
                <p className="review text_muted">{review}</p>
              </SwiperSlide>
            ))
          ) : (
            <p>No achievements available</p>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
