import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface CardsProps {
  name: string;
  position: string;
  description: string;
}
export default function TestimonialsCard({
  description,
  name,
  position,
}: CardsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          border: "1px solid green",
          borderRadius: 4,
          bgcolor: "#191A23",
          color: "white",
        }}
      >
        <CardContent sx={{}}>{description}</CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "1rem",
              md: "1.3rem",
            },
            color: "primary.main",
          }}
        >
          {" "}
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: ".6rem",
              md: ".8rem",
            },
            color: "white",
          }}
        >
          {" "}
          {position}
        </Typography>
      </Box>
      <div style={{
        
      }}></div>
    </Box>
  );
}
