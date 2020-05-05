/** @format */

import React from "react";
import { Router } from "@reach/router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Home path='/' />
        <About path='/about' />
        <Contact path='/contact' />
        <Portfolio path='/portfolio' />
      </Router>
      <Footer />
    </>
  );
}

export default App;
