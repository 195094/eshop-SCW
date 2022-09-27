import React from "react";

class ProductItemv2 extends React.Component {
  render() {
    return (
      <div className="productItem">
        <img className="picture" src={this.props.product.urls.small_s3}></img>
        <div className="prodBtn">
          <button>
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
        <div className="name">{this.props.product.alt_description}</div>
        <div className="price">${this.props.product.likes}</div>
      </div>
    );
  }
}

export default ProductItemv2;
