/** @format */

import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className='navigation'>
      <Link to='/' key='Home'>
        <p className='p'>Home</p>
      </Link>
      <Link to='/about' key='About'>
        <p className='p'>About</p>
      </Link>
      <Link to='/contact' key='Contact'>
        <p className='p'>Contact</p>
      </Link>
      <Link to='portfolio' key='Portfolio'>
        <p className='p'>Portfolio</p>
      </Link>
    </nav>
  );
};

export default NavBar;
