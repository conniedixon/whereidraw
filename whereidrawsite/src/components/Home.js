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
      {/* <p>
        Hello, my name is Ricky and I'm a freelance illustrator living in Leeds,
        UK. I create fantasy artwork, combining elements you would never see
        together in real life to achieve thought-provoking concepts for
        editorial, albums and books. Get in touch if you have an idea I can help
        you visualise.
      </p> */}
    </span>
  );
};

export default Home;
