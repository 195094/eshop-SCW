import React from "react";
import ReactDOM from "react-dom";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Home from "./pages/Home";
import CatalogList from "./pages/CatalogList";
import NotFound from "./pages/NotFound";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/navbar.css";
import CurrencyList from "./pages/CurrencyList";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: null,
    };
  }

  handleListCallBack = (listData) => {
    this.setState({ currency: listData });
    this.props.currCallBack(this.state.currency);
    this.render();
    console.log("NavBar sending up to App " + this.state.currency);
  };

  render() {
    return (
      <nav className="nav">
        <ul id="navBarUL">
          <li>
            <CatalogList />
          </li>
          <li id="homeLogo">
            <Link to="/">
              <div>
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
            </Link>
          </li>
          <li>
            <CurrencyList navCallBack={this.handleListCallBack} />
          </li>
          <li>Carts</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
