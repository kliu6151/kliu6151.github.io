import AboutMe from "./AboutSection";
import ContactMe from "./ContactMeSection";
import PortfolioSection from "./PortfolioSection";
import Welcome from "./Welcome";

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
