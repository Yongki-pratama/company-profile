import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import CardComponent from "./CardComponent";
import Components from "./Components";
import Prodacts from "./Prodact";
import Menu from "./Menu";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <body>
      <div className="Container">
        <Navbar />
        <Hero />
        <CardComponent />
        <Components />
        <Prodacts />
        <Menu />
      </div>
    </body>
  );
}

export default Home;
