import React from "react";
import ReactDOM from "react-dom";
import unsplash from "../API/Unsplash";
import ProductsList from "../components/ProductsList";
import "../styles/products.css";

class Women extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
      selectedClothing: null,
    };
  }
  componentDidMount = async () => {
    const response = await unsplash.get();
    console.log(response);
    console.log(response.data.results);
    this.setState({
      clothes: response.data.results,
    });
  };

  render() {
    return (
      <div className="productContainer">
        <ProductsList products={this.state.clothes} />
      </div>
      // <h1>Women</h1>
    );
  }
}

export default Women;
