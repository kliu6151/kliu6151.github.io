import Classes from "./PortfolioSection.module.css";
import React, {useState} from "react";
import image1 from './../../../../assets/Capture.PNG'

function PortfolioSection() {
  const [wantedRepo, setWantedRepo] = useState([]);
  const bulkImages = [
    image1
  ];

  function getUserRepo(username) {
    let wantedRepoTemp = [];
    const req = new XMLHttpRequest();
    const url = `https://api.github.com/users/${username}/starred`
    req.open('GET', url, true); //Opens our connection to the github server
    let manualWork = ['kliu6151.github.io'];
    

      req.onload = function () {
        const data = JSON.parse(this.response);
        for(let i in manualWork) {
          var pos = data.map(function(x) { return x.name; }).indexOf(manualWork[i]);
          wantedRepoTemp.push(data[pos]);
        }

        setWantedRepo(wantedRepoTemp);
      };
      req.send();
  }
  
    return(
  <section className={Classes.portfolioSection}  id="portfolio">
    <header>My Projects</header>
    <div id = {Classes["test"]}>
      {getUserRepo('kliu6151')}
      {wantedRepo.reduce(
          function(accumulator, currentValue, currentIndex, array) {
             (currentIndex % 2 === 0 &&
              accumulator.push(array.slice(currentIndex, currentIndex + 2)));
            return accumulator;
          }, []).map((repo,index) => 
        <>
        <div className={Classes.flexContainer}>

            <div className={Classes.repoGrid1}>

              <img src = {bulkImages[0]} alt = "WAH"></img>

              <div className={Classes.insidePicture1}>

                <span className={Classes.repoName}>{repo[0].name}</span>
                <br />
                <span className={Classes.repoDesc}>{repo[0].description}</span>
                <br />
                <a href = {repo[0].html_url}>Access Here</a>

              </div>

            </div>

            {repo.length === 2 &&
            <div className={Classes.repoGrid2}>
                <img src = {bulkImages[0]} alt = "WAH"></img>
              <div className={Classes.insidePicture2}>
                {wantedRepo[++index].name}
                <br />
                {wantedRepo[index].description}
                <br />
                <a href = {wantedRepo[index].html_url}>Access Here</a>
              </div>
            </div>
            }
        </div>
            
        
        </>
      )}
    </div>
    {/* <paragraph>My current projects</paragraph> */}
  </section>
    );
}

export default PortfolioSection;
