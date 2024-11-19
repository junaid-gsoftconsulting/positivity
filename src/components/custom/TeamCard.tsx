import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import linkedin from "/assets/team/linkedin.png";

interface CardsProps {
  heading: string;
  subHeading: string;
  description: string;
  image: string;
}
export default function TeamCard({
  heading,
  subHeading,
  image,
  description,
}: CardsProps) {
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "31%" },
        display: "flex",
        flexDirection: "column",
        marginY: 2,
        borderRadius: 8,
        border: "1px solid black",
        borderBottom: "5px solid black",
        justifyContent: "space-between",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <img src={image} alt="team" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: 10,
          }}
        >
          <Typography fontWeight={600}>{heading}</Typography>
          <Typography
            sx={{
              fontSize: {
                xs: ".8rem",
                lg: "1rem",
              },
            }}
          >
            {subHeading}
          </Typography>
        </Box>
        <img src={linkedin} alt="linkedIn" width={30} height={30} />
      </CardContent>
      <CardContent
        sx={{
          borderTop: "1px solid black",
          marginX: 3,
        }}
      ></CardContent>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
