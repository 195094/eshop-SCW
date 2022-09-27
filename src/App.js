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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: null,
    };
  }

  handleCurrCallBack = (selectedCurr) => {
    this.setState({ currency: selectedCurr });
    this.render();
    console.log("App state after currency change " + this.state.currency);
  };

  render() {
    return (
      <>
        <NavBar currCallBack={this.handleCurrCallBack} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route>
            <Route
              path="women"
              element={<Women curr={this.state.currency} />}
            ></Route>
            <Route path="men" element={<Men />}></Route>
            <Route path="kids" element={<Kids />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </>
    );
  }
}

export default App;
