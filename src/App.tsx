import {Box } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero";
import ResponsiveAppBar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Happen from "./components/Happen";
import CaseStudies from "./components/CaseStudies";
import AccordionUsage from "./components/Accordion";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


function App() {
  return (
    <Box marginX={4} sx={{
      display:"flex",
      flexDirection:"column",
      gap:4
    }}>
      <ResponsiveAppBar />
      <Hero />
      <Banner />
      <Services />
      <Happen />
      <CaseStudies />
      <AccordionUsage/>
      <Team/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </Box>
  );
}

export default App;
