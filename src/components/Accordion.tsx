import { Box } from "@mui/material";
import CustomHeading from "./custom/CustomHeading";
import AccordionCard from "./custom/AccordionCard";
import data from "../data.json";

export default function AccordionUsage() {
  return (
    <div id="FAQS">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* HEADING */}
      <CustomHeading
        heading="Our Working Process "
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />
      {/* accordions */}
      <Box
        sx={{
          paddingTop: 3,
        }}
      >
        {data?.accordionData?.map((accordion, index) => {
          
          return (
            <AccordionCard
              key={index}
              number={accordion.number}
              heading={accordion.heading}
              description={accordion.description}
              id={accordion.id}
            />
          );
        })}
      </Box>
    </Box>
    </div>
  );
}
