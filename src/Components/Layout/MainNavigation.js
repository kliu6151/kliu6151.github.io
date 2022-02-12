import classes from "./MainNavigation.module.css";

import {HashLink} from 'react-router-hash-link';
import DropDown from "../dropdown";
import {useState} from "react";
import {useEffect} from "react";


function MainNavigation() {

  const [scrollDir, setScrollDir] = useState("scrolling down");

useEffect(() => {
  const threshold = 80;
  let lastScrollY = window.pageYOffset;
  let ticking = false;

  const updateScrollDir = () => {
    const scrollY = window.pageYOffset;

    if (Math.abs(scrollY - lastScrollY) < threshold) {
      ticking = false;
      return;
    }

    setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
    lastScrollY = scrollY > 0 ? scrollY : 0;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollDir);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll);

  var test = document.getElementById("myDiv"); 

  if(scrollDir==="scrolling up")
  {
    test.style.position="fixed";
    test.style.display="block"; 
  }
  else
  {
    document.getElementById("myDiv").style.display = "none";
  }

  return () => window.removeEventListener("scroll", onScroll);
}, [scrollDir]);

  return(
  <header className={classes.header} id="myDiv" >
    
    <div className={classes.dropped}>
      {/* <div>Home Page</div> */}
      <ul>
        <DropDown></DropDown>
      </ul>
    </div>
    <ul className={classes.nav}>
      <li>
        <HashLink smooth to='#about'>About</HashLink>
      </li>
      <li>
        <HashLink smooth to="#portfolio">Portfolio</HashLink>
      </li>
      <li>
        <HashLink smooth to="#contact">Contact me</HashLink>
      </li>
    </ul>
  </header>
  );
}

export default MainNavigation;
