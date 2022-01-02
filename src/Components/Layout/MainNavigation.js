import classes from "./MainNavigation.module.css";

import {HashLink} from 'react-router-hash-link';
import DropDown from "../dropdown";
function MainNavigation() {
  return(
  <header className={classes.header}>
    
    <div className={classes.dropped}>
      <div>Home Page</div>
      <ul>
        <DropDown></DropDown>
      </ul>
    </div>
    <ul className={classes.test}>
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
