import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CallMadeIcon from "@mui/icons-material/CallMade";

interface CardsProps {
  heading: string;
  arrowBg: string;
  arrowColor: string;
  image: string;
  buttonColor: string;
  cardBg: string;
  headingColor:string
}
export default function BasicCard({
  heading,
  arrowBg,
  arrowColor,
  image,
  buttonColor,
  cardBg,
  headingColor
}: CardsProps) {
  return (
    <Card
      sx={{
        width: {xs:"100%", md:"45%"},
        display: "flex",
        bgcolor: cardBg,
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
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Box sx={{ width: "80%" }}>
            <Typography
              sx={{
                color: headingColor,
                fontWeight: 700,
                fontSize: { xs: ".8rem", sm: "1.3rem" },
                width: "fit-content",
              }}
            >
              {heading}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              bgcolor: arrowBg,
              padding: 0.5,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CallMadeIcon
              htmlColor={arrowColor}
              sx={{
                fontSize: 20,
              }}
            />
          </Box>
          <Button
            sx={{
              color: buttonColor,
              fontSize: ".8rem",
              textTransform: "none",
              display: { xs: "none", sm: "block" },
            }}
          >
            Learn more
          </Button>
        </CardActions>
      </CardContent>
      <CardContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {/* <Box sx={{width:{xs:300}}}> */}
        <img src={image} width="100%" />
        {/* </Box> */}
      </CardContent>
    </Card>
  );
}
