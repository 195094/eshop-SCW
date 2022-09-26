import React from "react";

const ProductItem = ({ product, onProductSelect }) => {
  return (
    <div className="productItem">
      <img className="picture" src={product.urls.small_s3}></img>
      <div className="name"></div>
      <div className="price"></div>
    </div>
  );
};

export default ProductItem;
