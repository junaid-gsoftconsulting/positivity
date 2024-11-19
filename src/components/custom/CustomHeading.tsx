import { Box, Typography } from "@mui/material";

interface CustomHeadingProps {
  heading: string;
  description: string;
}

const CustomHeading = ({ heading, description }: CustomHeadingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
          paddingX: 1,
          borderRadius: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 200,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {heading}
        </Typography>
      </Box>
      {/* sub-heading */}
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          display: "flex",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: ".8rem",
              lg: "1rem",
            },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
export default CustomHeading;
