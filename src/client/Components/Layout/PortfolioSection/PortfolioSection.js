import Classes from "./PortfolioSection.module.css";
import React, {useState} from "react";

function PortfolioSection() {
  const [test, setTest] = useState([]);
  

  function getUserRepo(username) {
    let test = [];
    const req = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/starred`
    req.open('GET', url, true); //Opens our connection to the github server
    
    

      req.onload = function () {
        const data = JSON.parse(this.response);
        for (let i in data) {
          test.push(data[i]);
        }
        setTest(data);
      };
      req.send();
  }

  
    return(
  <section className={Classes.portfolioSection}  id="portfolio">
    <header>My Projects</header>
    <div id = {Classes["test"]}>
      {getUserRepo('kliu6151')}
      {test.map((repo) => (
        <>
        <div className={Classes.repoGrid}>
          {repo.name}
          <br />
          {repo.description}
          <br />
          <a href = {repo.html_url}> hi</a>
        </div>
        </>
      ))}
    </div>
    {/* <paragraph>My current projects</paragraph> */}
  </section>
    );
}

export default PortfolioSection;
