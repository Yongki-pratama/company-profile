import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/main.css";
import Hero from "./Hero";
import CardComponent from "./CardComponent";
import Components from "./Components";
import Prodacts from "./Prodact";
import Menu from "./Menu";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classlist.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h2>Online Shoping </h2>

        <nav ref={navRef}>
          <Link to={"/Hero"}>Home</Link>
          <Link to={"/CardComponent"}>About</Link>
          <Link to={"/Components"}>Component</Link>
          <Link to={"/Prodact"}>Prodacts</Link>
          <Link to={"/Menu"}>Menu</Link>

          {/* <button className="btn btn--primary"> Sign Up</button>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button> */}
        </nav>

        <button className="nav-btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
