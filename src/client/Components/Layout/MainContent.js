import AboutMe from "./AboutMeSection/AboutSection";
import ContactMe from "./ContactSection/ContactMeSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection.js";
import Welcome from "./WelcomeSection/Welcome";
import React from "react";



function MainContent() {
  return (
    <div>
      <Welcome />
      <AboutMe />
      <PortfolioSection />
      <ContactMe />
      
    </div>
  );
}

export default MainContent;
