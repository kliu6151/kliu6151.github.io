import classes from "./MainNavigation";

import {Link} from 'react-router-dom'

function MainNavigation() {
  return(
  <header>
    <div>Home Page</div>
    <ul>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/Contact">Contact me</Link>
      </li>
    </ul>
  </header>
  );
}

export default MainNavigation;
