/** @format */

import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <span className='home'>
      <Link to='/portfolio'>
        <h1 className='homeTitle'>Ricky {<div />}BUTCHER</h1>
      </Link>
      <h2 className='homeSubtitle'>illustrator</h2>
    </span>
  );
};

export default Home;
