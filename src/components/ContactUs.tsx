import { Box, Button, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import contactus from "/assets/contact/contactus.png";
import CustomHeading from "./custom/CustomHeading";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <CustomHeading
          heading="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
      </Box>
      <Box
        sx={{
          bgcolor: "primary.dark",
          display: "flex",
          borderRadius: 5,
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            flexBasis: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "stretch",
            padding: 5,
            gap: { xs: 1, md: 3 },
          }}
        >
          {/* RADIO */}
          <Box>
            <FormControl>
              <RadioGroup defaultValue="hi" name="radio-buttons-group">
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <FormControlLabel
                    value="hi"
                    control={<Radio />}
                    label="Say Hi"
                  />
                  <FormControlLabel
                    value="qoute"
                    control={<Radio />}
                    label="Get a Qoute"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
          {/* NAME */}

          <FormControl defaultValue="" required>
            <label>Name</label>
            <TextField id="outlined-basic" sx={{marginTop:1}}/>
          </FormControl>
          <FormControl defaultValue="" required>
            <label>Email*</label>
            <TextField id="outlined-basic"sx={{marginTop:1}} />
          </FormControl>
          <FormControl defaultValue="" required>
            <label>Message*</label>
            <TextField
              id="outlined-multiline-static " sx={{marginTop:1}}
              multiline
              rows={4}
              defaultValue="Message"
            />
          </FormControl>
          {/* Button */}
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "white",
                bgcolor: "black",
                width: "100%",
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
                Send Message
              </Typography>
            </Button>
          </Box>
        </Box>
        {/* RIGHT */}
        <Box
          sx={{
            flexBasis: "50%",
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
            paddingY: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <img src={contactus} width="70%" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ContactUs;
