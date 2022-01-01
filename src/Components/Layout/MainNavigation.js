import classes from "./MainNavigation.module.css";

import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link';

function MainNavigation() {
  return(
  <header className={classes.header}>
    <div className={classes.title}>Home Page</div>
    <ul>
      <li>
        <HashLink smooth to='/About/#about'>About</HashLink>
      </li>
      <li>
        <HashLink smooth to="/Portfolio/#portfolio">Portfolio</HashLink>
      </li>
      <li>
        <Link to="/Contact">Contact me</Link>
      </li>
    </ul>
  </header>
  );
}

export default MainNavigation;
