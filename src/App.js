import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Component/Home";
import "./Style/main.css";
import Hero from "./Component/Hero";
import CardComponent from "./Component/CardComponent";
import Components from "./Component/Components";
import Prodacts from "./Component/Prodact";
import Menu from "./Component/Menu";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/CardComponent" element={<CardComponent />} />
          <Route path="/Components" element={<Components />} />
          <Route path="/prodact" element={<Prodacts />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
