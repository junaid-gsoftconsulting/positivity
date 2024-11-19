import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import React from "react";

interface AccordionCardProps {
  number: string;
  heading: string;
  description: string;
  id: string;
}
const AccordionCard = ({
  number,
  heading,
  description,
  id,
}: AccordionCardProps) => {
  const [expanded, setExpanded] = React.useState<string | false>("false");
  const handleChange =
    (acc: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault(); 
      setExpanded(isExpanded ? acc : false);
    };

  return (
    <Accordion
      expanded={expanded === id}
      onChange={handleChange(id)}
      sx={{
        border: "1px solid black",
        borderBottom: "5px solid black",
        borderRadius: 4,
        marginBottom: 3,
        bgcolor: expanded === id ? "primary.main" : "primary.dark",
        paddingY: 1,
        "&::before": {
          content: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              borderRadius: 4,
              bgcolor: "primary.dark",
            }}
          >
            {expanded === id ? <RemoveIcon /> : <AddIcon />}
          </Box>
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          marginX: { xs: 0, md: 2 },
        }}
      >
        <Typography sx={{ fontSize: "2rem", paddingRight: 2 }} fontWeight={500}>
          {number}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "500",
          }}
        >
          {heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {expanded === id && (
          <Box
            sx={{
              borderTop: "1px solid gray",
              marginX: 3,
              paddingBottom: 3,
            }}
          />
        )}
        <Box
          sx={{
            marginX: 3,
          }}
        >
          {description}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionCard;
