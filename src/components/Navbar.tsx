import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import IconButton from "@mui/material/IconButton";
import logo from "/assets/logo/Logo.png";

const pages = ["About us", "Services", "Use Cases", "Testimonials", "FAQS"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

    setMenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{ background: "white", boxShadow: "none" }}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} width={100} alt="Logo" />
          </Box>

          {/* Mobile Menu Icon */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ padding: 0 }}
            >
              {menuOpen ? (
                <CloseIcon sx={{ color: "black" }} />
              ) : (
                <MenuIcon sx={{ color: "black" }} />
              )}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={menuOpen}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Box
                sx={{
                  width: 800,
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page}`}
                style={{ scrollBehavior: "smooth" }}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    textDecoration: "none",
                    fontSize: "13px",
                  }}

                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Request a Quote Button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              sx={{
                my: 2,
                color: "black",
                border: "1px solid black",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 400,
                  textDecoration: "none",
                  fontSize: "13px",
                }}
              >
                Request a quote
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
