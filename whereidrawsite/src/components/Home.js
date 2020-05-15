/** @format */

import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <span className='home'>
      <Link to='/portfolio'>
        <h1 className='homeTitle'>Ricky {<div />}BUTCHER</h1>
      </Link>
      <p className={"p"}>
        Hello, my name is Ricky and I'm a freelance illustrator living in Leeds,
        UK. I create fantasy and surrealist artwork, combining elements you
        would never see together in real life to achieve thought-provoking
        concepts for editorial, albums and books.
      </p>
    </span>
  );
};

export default Home;
