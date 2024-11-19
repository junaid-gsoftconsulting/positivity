import { Box } from "@mui/material";
import TeamCard from "./custom/TeamCard";

import CustomButton from "./custom/CustomButton";
import CustomHeading from "./custom/CustomHeading";
import data from "../data.json";

const Team = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADING */}
      <CustomHeading
        heading="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      {/* CARDS */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap:3
        }}
      >

          {data.teamData.map((team, index) => {
            return (
              <TeamCard
                key={index}
                heading={team.heading}
                subHeading={team.subHeading}
                description={team.description}
                image={team.image}
              />
            );
          })}
        </Box>
      {/* Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "end" },
        }}
      >
        <CustomButton text="See all team" />
      </Box>
    </Box>
  );
};

export default Team;
