import { Box, Typography } from "@mui/material";
import CustomButton from "./custom/CustomButton";
import happen from "/assets/happen/happen.png";

const Happen = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: 10,
      }}
    >
      {/* LEFT */}
      <Box
        flexBasis="50%"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          padding: 4,
        }}
      >
        <Typography
          fontWeight={700}
          sx={{
            fontSize: {
              xs: "1.4rem",
              md: "1.7rem",
            },
          }}
        >
          Lets make things happen
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: ".8rem",
              lg: "1rem",
            },
          }}
        >
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.h
        </Typography>
        <CustomButton text="Get your free proposal" />
      </Box>
      {/* RIGHT */}
      <Box
        flexBasis="50%"
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <img src={happen} alt="image" width="40%" />
      </Box>
    </Box>
  );
};
export default Happen;
