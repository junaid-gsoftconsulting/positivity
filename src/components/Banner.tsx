import { Box } from "@mui/material";
import netflix from "/assets/company logos/netflix.png";
import notion from "/assets/company logos/notion.png";
import zoom from "/assets/company logos/zoom.png";
import hubspot from "/assets/company logos/hubspot.png";
import dribble from "/assets/company logos/dribble.png";
import amazon from "/assets/company logos/amazon.png";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <Marquee>
      <Box
        sx={{
          display: "flex",
          gap: 8,
        }}
      >
        <img src={amazon} alt="company-logo" />
        <img src={dribble} alt="company-logo" />
        <img src={hubspot} alt="company-logo" />
        <img src={notion} alt="company-logo" />
        <img src={netflix} alt="company-logo" />
        <img src={zoom} alt="company-logo" />
      </Box>
    </Marquee>
  );
};
export default Banner;
