import React from "react";
import ReactDOM from "react-dom";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Home from "./pages/Home";
import CatalogList from "./pages/CatalogList";
import NotFound from "./pages/NotFound";
// import { Women, Men, Kids, Home } from "./pages";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/navbar.css";

function NavBar() {
  return (
    <nav className="nav">
      <ul id="navBarUL">
        <li>
          <CatalogList />
        </li>
        <li id="homeLogo">
          <Link to="/">Home</Link>
        </li>
        <li>Currency</li>
        <li>Carts</li>
      </ul>
    </nav>
  );
}

export default NavBar;
