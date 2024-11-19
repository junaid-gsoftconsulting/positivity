import { Box } from "@mui/material";
import BasicCard from "./custom/Card";
import CustomHeading from "./custom/CustomHeading";
import data from "../data.json";

const Services = () => {
  return (
    <div id="Services">
      <Box sx={{ display: "flex", flexDirection: "column", }}>
      {/* Heading */}
      <CustomHeading
        heading="Services"
        description="At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:"
      />
      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {data.servicesData.map((service, index) => {
          return (
            <BasicCard
              key={index}
              arrowBg={service.arrowBg}
              arrowColor={service.arrowColor}
              buttonColor={service.buttonColor}
              cardBg={service.cardBg}
              heading={service.heading}
              image={service.image}
              headingColor={service.headingColor}
            />
          );
        })}
      </Box>
    </Box>
    </div>
  );
};
export default Services;
