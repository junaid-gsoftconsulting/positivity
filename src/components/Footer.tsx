import { Box, Button, Link, Typography } from "@mui/material";
import whitelogo from "/assets/footer/logoWhite.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div id="About us">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#191A23",
          padding: 4,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          overflow: "hidden",
        }}
      >
        {/*upper  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box>
            <img src={whitelogo} alt="logo" />
          </Box>
          {/* links */}
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 3, color: "white" }}
          >
            <Link href="#Abous us" color="inherit">
              {"About us"}
            </Link>
            <Link href="#Services" color="inherit">
              {"Services"}
            </Link>
            <Link href="#Use Cases" color="inherit">
              {"Use Cases"}
            </Link>
            <Link href="#Testimonials" color="inherit">
              {"Testimonials"}
            </Link>
            <Link href="#FAQS" color="inherit">
              {"FAQS"}
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                bgcolor: "white",
                padding: 1,
              }}
            >
              <LinkedInIcon fontSize="small" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                bgcolor: "white",
                padding: 1,
              }}
            >
              <FacebookIcon fontSize="small" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                bgcolor: "white",
                padding: 1,
              }}
            >
              <TwitterIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
        {/* center */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            marginY: 3,
          }}
        >
          {/* description */}
          <Box
            sx={{
              flexBasis: "50%",
              display: "flex",
              flexDirection: "column",
              color: "white",
              gap: 2,
              // justifyContent:"center",
              alignItems: { xs: "center", md: "start" },
              // paddingY: 2,
            }}
          >
            <Box
              sx={{
                bgcolor: "primary.main",
                padding: 0.5,
              }}
            >
              <Typography
                sx={{
                  color: "black",
                }}
              >
                Contact us:
              </Typography>
            </Box>

            <Typography>Email: info@positivus.com</Typography>
            <Typography>Phone: 555-567-8901</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "start" },
              }}
            >
              <Typography>Address: 1234 Main St</Typography>
              <Typography>Moonstone City, Stardust State 12345</Typography>
            </Box>
          </Box>
          {/* email */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "50%" },
              bgcolor: "#292a32",
              padding: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,

              // marginY:4
            }}
          >
            <input
              style={{
                paddingTop: 15,
                paddingBottom: 15,
                marginLeft: 15,
                marginRight: 15,
                paddingLeft: 10,
                background: "#292a32",
                border: "1px solid white",
                borderRadius: 5,
                width: "100%",
              }}
              placeholder="Email"
            />
            <Button
              sx={{
                bgcolor: "primary.main",
                color: "black",
                padding: 1.8,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: ".8rem",
                }}
              >
                Subscribe to news
              </Typography>
            </Button>
          </Box>
        </Box>
        {/* line */}
        <Box
          sx={{
            borderTop: "1px solid white",
            paddingY: 2,
          }}
        ></Box>
        {/* bottom */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
            gap: 2,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography>© 2023 Positivus. All Rights Reserved.</Typography>
          <Link href="#" color="inherit">
            {"Privacy Policy"}
          </Link>
        </Box>
      </Box>
    </div>
  );
};
export default Footer;
