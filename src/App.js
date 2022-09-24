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
import "./NavBar";
import NavBar from "./NavBar";

function App() {
  //TODO: LIST OUT THE PRODUCTS 3xN
  return (
    //DOSUREDI NAVBAR SO SLIKI ZA CURR, CART, HOMELOGO
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="men" element={<Men />}></Route>
          <Route path="kids" element={<Kids />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
