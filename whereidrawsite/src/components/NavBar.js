/** @format */

import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to='/' key='Home'>
        <p>Home</p>
      </Link>
      <Link to='/about' key='About'>
        <p>About</p>
      </Link>
      <Link to='/contact' key='Contact'>
        <p>Contact</p>
      </Link>
      <Link to='portfolio' key='Portfolio'>
        <p>Portfolio</p>
      </Link>
    </nav>
  );
};

export default NavBar;
