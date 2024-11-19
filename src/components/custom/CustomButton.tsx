import { Button, Typography } from "@mui/material";

interface CustomButtonProps{
    text:string
}

const CustomButton = ({text}:CustomButtonProps) => {
  return (
    <Button
      sx={{
        my: 2,
        color: "white",
        bgcolor: "black",
        width: { xs: 200, md: 150 },
      }}
    >
      <Typography
        sx={{
          fontWeight: 400,
          textDecoration: "none",
          fontSize: {
            sm: ".8rem",
          },
          textTransform: "none",
        }}
        marginY={1}
      >
     {text}
      </Typography>
    </Button>
  );
};

export default CustomButton;
