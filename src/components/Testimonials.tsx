import { Box } from "@mui/material";
import TestimonialsCard from "./custom/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data.json";

// Import Swiper styles

import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (  
    <div id="Testimonials">
      <Box
        sx={{
          display: "flex",
          gap: 3,
          bgcolor: "#191A23",
          padding: { xs: 2.6, sm: 3 },
          borderRadius: 8,
          height: {
            xs: "350px",
            sm: "200px",
            md: "250px",
            lg: "300px",
          },
        }}
      >
        <Swiper
          slidesPerView={2.3}
          // centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "bullets",
            clickable: true,
            renderBullet: function (_index, className) {
              return (
                '<span  class="' +
                className +
                '"><img class="pagination-bullet"/></span>'
              );
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{
            paddingTop: 10,
            height: "100%",
          }}
          breakpoints={{
            900: {
              slidesPerView: 2.3,
            },
            768: {
              slidesPerView: 1.4,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {data.testimonialsData.map((testimonial, index) => {
            return (
              <SwiperSlide>
                <TestimonialsCard
                  key={index}
                  name={testimonial.name}
                  position={testimonial.position}
                  description={testimonial.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </div>
  );
};
export default Testimonials;
