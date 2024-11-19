import { Box, Divider } from "@mui/material";
import CaseStudiesCard from "./custom/CaseStudiesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CustomHeading from "./custom/CustomHeading";
import data from "../data.json";

const CaseStudies = () => {
  return (
   <div id="Use Cases"
   >
     <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
    >
      {/* HEADING */}
      <CustomHeading
        heading="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      {/* CARDS */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          bgcolor: "#191A23",
          borderRadius: 5,
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {data.caseStudiesData.map((caseStudy, index) => (
            <>
              <CaseStudiesCard
                key={index}
                description={caseStudy.description}
              />
              {index < data.caseStudiesData.length - 1 && (
                <Divider
                  sx={{ bgcolor: "primary.dark", width: "2px" }}
                ></Divider>
              )}
            </>
          ))}
        </Box>
      </Box>
      {/* SWIPER */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
        }}
      >
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.caseStudiesData.map((casestudy, index) => (
            <SwiperSlide>
              <CaseStudiesCard
                key={index}
                description={casestudy.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
   </div>
  );
};
export default CaseStudies;
