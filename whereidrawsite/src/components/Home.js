/** @format */

import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <span className='home'>
      <span className='rectangle'></span>
      <span className='square'></span>

      <div className={"canvas"}>
        <Link to='/portfolio'>
          <span className={"ball"}></span>
        </Link>
      </div>
      <p className={"click-here"}>CATCH⇨</p>
      <h1 className='homeTitle'>Ricky {<div />}BUTCHER</h1>
      <span className='bigcircle'></span>

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
