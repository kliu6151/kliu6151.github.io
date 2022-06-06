import Classes from "./PortfolioSection.module.css";
import React, {useState} from "react";

function PortfolioSection() {
  const [wantedRepo, setWantedRepo] = useState([]);
  

  function getUserRepo(username) {
    let wantedRepoTemp = [];
    const req = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/starred`
    req.open('GET', url, true); //Opens our connection to the github server
    let manualWork = ['kliu6151.github.io','TDS'];
    

      req.onload = function () {
        const data = JSON.parse(this.response);
        for(let i in manualWork) {
          // console.log(i);
          var pos = data.map(function(x) { return x.name; }).indexOf(manualWork[i]);
          wantedRepoTemp.push(data[pos]);
        }
        // console.log(wantedRepoTemp)
        // for (let i in data) {
        //   if(data[i].name === "kliu6151.github.io") {
        //     test.push(data[i]);
        //   }
        // }
        setWantedRepo(wantedRepoTemp);
      };
      req.send();
  }
  
    return(
  <section className={Classes.portfolioSection}  id="portfolio">
    <header>My Projects</header>
    <div id = {Classes["test"]}>
      {getUserRepo('kliu6151')}
      {wantedRepo.map((repo,index) => (
        <>
        {index}
        <div className={Classes.flexContainer}>
            <div className={Classes.repoGrid}>
              {repo.name}
              <br />
              {repo.description}
              <br />
              <a href = {repo.html_url}>Access Here</a>
            </div>
            {index !== wantedRepo.length - 1 &&
            <div className={Classes.repoGrid}>
              {wantedRepo[++index].name}
              <br />
              {wantedRepo[index].description}
              <br />
              <a href = {wantedRepo[index].html_url}>Access Here</a>
            </div>
            }
        </div>
        
        </>
      ))}
    </div>
    {/* <paragraph>My current projects</paragraph> */}
  </section>
    );
}

export default PortfolioSection;
