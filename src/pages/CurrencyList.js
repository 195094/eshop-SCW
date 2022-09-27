import React from "react";
import "../styles/currencyList.css";
import { useState } from "react";

const currencies = [
  {
    name: "USD",
    symbol: "$",
  },
  {
    name: "EUR",
    symbol: "€",
  },
  {
    name: "JPY",
    symbol: "¥",
  },
];

class CurrencyList extends React.Component {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [selectedCurrency, setSelectedCurrency] = useState(null);
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedCurrency: false,
    };
  }

  toggling = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  //   const toggling = () => setIsOpen(!isOpen);

  //   const onCurrencyClicked = (value) => () => {
  //     setSelectedCurrency(value);
  //     console.log("CurrencyList sending up to NavBar" + value);
  //     setIsOpen(false);
  //     props.navCallBack(value);
  //   };

  onCurrencyClicked = (value) => () => {
    this.setState((prevState) => ({
      selectedCurrency: value,
      isOpen: !prevState.isOpen,
    }));
    this.props.navCallBack(value);
    console.log("CurrencyList sending up to NavBar" + value);
  };

  render() {
    return (
      <>
        <div className="DropDownContainerCur">
          <div className="DropDownHeaderCur" onClick={this.toggling}>
            {this.state.selectedCurrency || "€"}
            <span id="DropDownArr">{this.state.isOpen ? "▲" : "▼"}</span>
          </div>
          {this.state.isOpen && (
            <div className="DropDownListContainerCur">
              <ul className="DropDownListCur">
                {currencies.map((currency) => (
                  <li className="ListItemCur">
                    <div
                      onClick={this.onCurrencyClicked(currency.symbol)}
                      key={Math.random()}
                    >
                      {currency.symbol} {currency.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default CurrencyList;
