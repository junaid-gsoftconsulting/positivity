import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

interface CaseStudiesCardProps {
  description: string;
}
export default function CaseStudiesCard({ description }: CaseStudiesCardProps) {
  return (
    <Card sx={{bgcolor: "#191A23", boxShadow:"none", display:"flex", flexDirection:"column" ,borderRadius:4}}>
      <CardContent>
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: ".8rem",
              lg: "1rem",
              maxWidth:"90%"
            },
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ textTransform:"none"}}>
          Learn More{" "}
          <ArrowOutwardIcon sx={{ fontSize: 15, paddingLeft: 0.5 }} />
        </Button>
      </CardActions>
    </Card>
  );
}
