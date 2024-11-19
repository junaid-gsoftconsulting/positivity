import { Box, Typography } from "@mui/material";
import illustration from "/assets/Illustration.png";
import CustomButton from "./custom/CustomButton";

const Hero = () => {
  return (
    <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
      {/* LEFT */}
      <Box flexBasis="50%">
        <Box
          sx={{
            maxWidth: {xs:"100%", md:"80%"},
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { sm: "1.5rem", md: "2rem", lg: "3rem" },
            }}
          >
            Navigating the digital landscape for success
          </Typography>
          <Box
        sx={{
          display: {xs:"flex", sm:"none"},
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={illustration}
          style={{
            width: "80%",
          }}
        />
      </Box>
          <Typography
            sx={{
              fontSize: {
                xs: ".8rem",
                lg: "1rem",
              },
            }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </Typography>
        {/* BUTTON */}
        <CustomButton text="Book a consultation"/>
        </Box>
      </Box>
      {/* RIGHT  */}
      <Box
        flexBasis="50%"
        sx={{
          display: {xs:"none", sm:"flex"},
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={illustration}
          style={{
            width: "80%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
