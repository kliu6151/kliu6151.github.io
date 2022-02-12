import Classes from "./PortfolioSection.module.css";

function PortfolioSection() {
    return(
  <section className={Classes.portfolioSection}  id="portfolio">
    <header>My Projects</header>
    <paragraph>My current projects</paragraph>
  </section>
    );
}

export default PortfolioSection;
